import { useMutation, useQuery } from "@apollo/client"
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik"
import { useRouter } from "next/router"
import * as Yup from "yup"
import {
  CreateSkillDocument,
  CreateSkillMutation,
  SkillsByTeamDocument,
  SkillsByTeamQuery,
  DeleteSkillDocument,
  DeleteSkillMutation,
  UpdateSkillDocument,
  UpdateSkillMutation,
} from "../../graphql/generated"

interface FormCreateSkillsValue {
  id?: string
  name: string
  description?: string
}

interface FormCreateSkillsValues {
  skills: FormCreateSkillsValue[]
}

const FormCreateSkillsSchema = Yup.object().shape({
  skills: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Required"),
      description: Yup.string(),
    })
  ),
})

const FormCreateSkills = () => {
  const {
    query: { userId, teamId },
  } = useRouter()
  const refreshQueriesOnOperation = [
    { query: SkillsByTeamDocument, variables: { teamId } },
  ]

  const { data: savedSkills, loading: savedSkillsLoading } =
    useQuery<SkillsByTeamQuery>(SkillsByTeamDocument, {
      variables: { teamId },
      notifyOnNetworkStatusChange: true,
    })

  const [updateSkill, { loading: updateSkillLoading }] =
    useMutation<UpdateSkillMutation>(UpdateSkillDocument)

  const [
    createSkill,
    { loading: createdSkillLoading, error: createSkillError },
  ] = useMutation<CreateSkillMutation>(CreateSkillDocument)

  const [deleteSkill, { loading: deleteSkillLoading }] =
    useMutation<DeleteSkillMutation>(DeleteSkillDocument)

  const handleInputBlur = async (
    input?: { [key: string]: string },
    id?: string
  ) => {
    await updateSkill({
      variables: {
        skillId: id,
        ...input,
      },
    })
  }

  const handleDeleteItem = async (
    remove: (index: number) => void,
    id: string | undefined,
    index: number
  ) => {
    if (id) {
      await deleteSkill({
        variables: { skillId: id },
        notifyOnNetworkStatusChange: true,
        refetchQueries: refreshQueriesOnOperation,
      })
      remove(index)
    }
  }

  const handleAdd = async (
    push: (obj: FormCreateSkillsValue) => void,
    obj: any
  ) => {
    if (obj) {
      // persists new entry to db with default values
      const { data } = await createSkill({
        variables: {
          name: obj.name,
          description: obj.description,
          userId,
          teamId,
        },
        notifyOnNetworkStatusChange: true,
        refetchQueries: refreshQueriesOnOperation,
      })
      // push the new skill to formik values and add
      // the ID value returned from the db req
      push({ id: data?.createSkill?.id, ...obj })
    }
  }

  if (savedSkillsLoading) {
    return <p>Loading...</p>
  }

  if (!userId || !teamId) {
    return <p>Not allowed</p>
  }

  return (
    <Formik
      initialValues={{
        skills:
          (savedSkills?.skills as FormCreateSkillsValue[] | undefined) || [],
      }}
      validationSchema={FormCreateSkillsSchema}
      onSubmit={(values: FormCreateSkillsValues) => {}}
    >
      {({ isSubmitting, values }) => (
        <Form>
          <FieldArray name="skills">
            {({ remove, push }) => (
              <ol
                style={{
                  margin: 0,
                  padding: 0,
                  listStyleType: "none",
                }}
              >
                {values.skills.length > 0 &&
                  values.skills.map((skill, index) => (
                    <li
                      key={`skill-${index}`}
                      style={{
                        padding: "1rem",
                        borderBottom: "1px solid gray",
                      }}
                    >
                      <div>
                        <label htmlFor={`skills.${index}.name`}>
                          Name
                          <br />
                          <Field
                            id={`skills.${index}.name`}
                            name={`skills.${index}.name`}
                            placeholder="Skill Name"
                            type="text"
                          />
                        </label>
                        <ErrorMessage
                          name={`skills.${index}.name`}
                          component="div"
                        />
                      </div>
                      <div>
                        <label htmlFor={`skills.${index}.description`}>
                          Description
                          <br />
                          <Field
                            as="textarea"
                            id={`skills.${index}.description`}
                            name={`skills.${index}.description`}
                            placeholder="Describe this skill"
                          />
                        </label>
                        <ErrorMessage
                          name={`skills.${index}.description`}
                          component="div"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          handleInputBlur(
                            { ...values.skills[index] },
                            values.skills[index]["id"]
                          )
                        }
                      >
                        Update
                      </button>{" "}
                      <button
                        type="button"
                        disabled={deleteSkillLoading}
                        onClick={() =>
                          handleDeleteItem(
                            remove,
                            values.skills[index]["id"],
                            index
                          )
                        }
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                <div
                  style={{
                    padding: "1rem",
                    background: "lightGray",
                  }}
                >
                  <button
                    type="button"
                    disabled={createdSkillLoading}
                    onClick={() =>
                      handleAdd(push, {
                        name: `New Skill ${values.skills.length + 1}`,
                        description: "",
                      })
                    }
                  >
                    Add a skill
                  </button>
                </div>
              </ol>
            )}
          </FieldArray>
        </Form>
      )}
    </Formik>
  )
}

export { FormCreateSkills }
