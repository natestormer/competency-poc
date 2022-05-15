import { useMutation, useQuery } from "@apollo/client"
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik"
import { useRouter } from "next/router"
import * as Yup from "yup"

import {
  CreateUserLevelsDocument,
  CreateUserLevelsMutation,
  SetLevelsDataDocument,
  SetLevelsDataQuery,
  UserLevelsPageDocument,
} from "../../graphql/generated"

interface FormSetLevelsValues {
  levels: {
    skillId: string
    name?: string | null
    level: number | string
    comment?: string
  }[]
}

interface FormSetLevelsProps {
  teamId: string
}

const FormSetLevels = ({ teamId }: FormSetLevelsProps) => {
  const { query } = useRouter()
  const { data, loading } = useQuery<SetLevelsDataQuery>(
    SetLevelsDataDocument,
    {
      variables: { teamId },
    }
  )
  const [setUserLevels] = useMutation<CreateUserLevelsMutation>(
    CreateUserLevelsDocument
  )

  if (loading) return <p>Loading...</p>

  const minLevel = 0
  const levelCount = data?.team?.levelCount || 10
  const levelScaleModifier = data?.team?.levelScaleModifier || 1
  const maxLevel = levelCount * levelScaleModifier

  const FormSetLevelsSchema = Yup.object().shape({
    levels: Yup.array().of(
      Yup.object().shape({
        level: Yup.number().min(minLevel).max(maxLevel).required(),
        comment: Yup.string(),
      })
    ),
  })

  const levelsInitialValues =
    data?.skills?.map((skill) => ({
      skillId: skill.id,
      name: skill.name,
      level: "",
      comment: "",
    })) || []

  return (
    <Formik
      initialValues={{ levels: levelsInitialValues }}
      validationSchema={FormSetLevelsSchema}
      onSubmit={async (values: FormSetLevelsValues, { setSubmitting }) => {
        const userLevels = values.levels.map((value) => ({
          user: { connect: { id: query.userId } },
          currentLevel: value.level,
          comment: value.comment,
          team: { connect: { id: teamId } },
          skill: { connect: { id: value.skillId } },
        }))

        await setUserLevels({
          variables: {
            userLevels,
          },
          refetchQueries: [
            {
              query: UserLevelsPageDocument,
              variables: { userId: query.userId },
            },
          ],
        })
        setSubmitting(false)
      }}
    >
      {({ values, isSubmitting }) => (
        <Form>
          <FieldArray name="levels">
            {() => (
              <div>
                {values.levels.length > 0 &&
                  values.levels.map((level, index) => (
                    <div key={index}>
                      <h3>{level.name}</h3>
                      <Field
                        type="hidden"
                        name={`levels.${index}.skillId`}
                        id={`levels.${index}.skillId`}
                      />
                      <div>
                        <label htmlFor={`levels.${index}.level`}>
                          Level
                          <br />
                          <small>
                            <b>
                              Between {minLevel}-{maxLevel}
                            </b>
                          </small>
                          <br />
                          <Field
                            type="number"
                            id={`levels.${index}.level`}
                            name={`levels.${index}.level`}
                            placeholder="Estimate your level for this skill"
                          />
                        </label>
                        <ErrorMessage name={`levels.${index}.level`}>
                          {(msg) => <div>{msg}</div>}
                        </ErrorMessage>
                      </div>
                      <br />
                      <div>
                        <label htmlFor={`levels.${index}.comment`}>
                          Comment
                          <br />
                          <Field
                            as="textarea"
                            id={`levels.${index}.comment`}
                            name={`levels.${index}.comment`}
                            placeholder="Comments"
                          />
                        </label>
                        <ErrorMessage name={`levels.${index}.comment`}>
                          {(msg) => <div>{msg}</div>}
                        </ErrorMessage>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </FieldArray>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  )
}

export { FormSetLevels }
