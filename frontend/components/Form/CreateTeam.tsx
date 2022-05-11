import { useMutation } from "@apollo/client"
import { ErrorMessage, Field, Form, Formik } from "formik"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import * as Yup from "yup"

import {
  CreateTeamDocument,
  CreateTeamMutation,
  UserTeamsCreatePageDocument,
} from "../../graphql/generated"
import { useUser } from "../../hooks"

interface FormCreateTeamValues {
  name: string
  description?: string
}

const FormCreateTeamSchema = Yup.object().shape({
  name: Yup.string().required(),
  description: Yup.string(),
})

const FormCreateTeam = () => {
  const { query } = useRouter()
  const [serverError, setServerError] = useState<string | null>(null)
  const { user } = useUser()
  const [success, setSuccess] = useState<boolean>(false)
  const [createTeam, { error, data: creatTeamData }] =
    useMutation<CreateTeamMutation>(CreateTeamDocument, {
      refetchQueries: [{ query: UserTeamsCreatePageDocument }], // @Todo: figure out why we have to refetch the entire page
      onError: (error) => {
        const message = error.message.split("ERR: ")
        console.log(message)
        setServerError(message[message.length - 1])
      },
    })

  if (!user) {
    return <p>Not allowed</p>
  }

  return (
    <Formik
      initialValues={{
        name: "",
        description: "",
      }}
      validationSchema={FormCreateTeamSchema}
      onSubmit={async (
        values: FormCreateTeamValues,
        { setSubmitting, resetForm }
      ) => {
        await createTeam({
          variables: {
            name: values.name,
            description: values.description,
            userId: user.id,
          },
        })
        setSubmitting(false)
        resetForm({
          values: {
            name: "",
          },
        })
        setSuccess(true)
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <h2>Create a Team</h2>
          {error && <div>{error.message}</div>}
          {serverError && <div>{serverError}</div>}
          {success && !serverError && (
            <div>
              <p>Team Created!</p>
              <Link
                href={`/user/${query.userId}/teams/${creatTeamData?.createTeam?.id}`}
              >
                View it here
              </Link>
              <br />
            </div>
          )}
          <div>
            <label htmlFor="name">
              Team Name <br />
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Name your team"
              />
            </label>{" "}
          </div>
          <div>
            <label htmlFor="description">
              Team Name <br />
              <Field
                as="textarea"
                id="description"
                name="description"
                placeholder="Describe this team..."
              />
            </label>{" "}
          </div>
          <ErrorMessage name="name">{(msg) => <div>{msg}</div>}</ErrorMessage>
          <button type="submit" disabled={isSubmitting}>
            Create Team
          </button>
        </Form>
      )}
    </Formik>
  )
}

export { FormCreateTeam }
