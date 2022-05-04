import { ApolloError, useMutation } from "@apollo/client"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { useState } from "react"
import { invitationExpirationHours } from "../../config"
import {
  CreateInvitationDocument,
  CreateInvitationMutation,
  UserInvitationPageDocument,
} from "../../graphql/generated"
import { useUser } from "../../hooks"

interface FormCreateInvitationValues {
  email: string
}

const FormCreateInvitation = () => {
  const [serverError, setServerError] = useState<string | null>(null)
  const { user } = useUser()
  const [success, setSuccess] = useState<boolean>(false)
  const [createInvitation, { error }] = useMutation<CreateInvitationMutation>(
    CreateInvitationDocument,
    {
      refetchQueries: [{ query: UserInvitationPageDocument }], // @Todo: figure out why we have to refetch the entire page
      onError: (error) => {
        const message = error.message.split("ERR: ")
        console.log(message)
        setServerError(message[message.length - 1])
      },
    }
  )

  if (!user) {
    return <p>Not allowed</p>
  }

  return (
    <Formik
      initialValues={{
        email: "",
      }}
      onSubmit={async (
        values: FormCreateInvitationValues,
        { setSubmitting, resetForm }
      ) => {
        const now = new Date()
        // expires 24 hours from now
        const expiryDate = new Date(
          now.getTime() + invitationExpirationHours * 60 * 60 * 1000
        )
        await createInvitation({
          variables: {
            email: values.email,
            expires: expiryDate.toISOString(),
            userID: user.id,
          },
        })
        setSubmitting(false)
        resetForm({
          values: {
            email: "",
          },
        })
        setSuccess(true)
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <h2>Send an Invitation</h2>
          {error && <div>{error.message}</div>}
          {serverError && <div>{serverError}</div>}
          {success && !serverError && <p>Invitation Sent!</p>}
          <div>
            <label htmlFor="email">
              Email{" "}
              <Field
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="Invitee's email address"
              />
            </label>{" "}
            <button type="submit" disabled={isSubmitting}>
              Send Invitation
            </button>
          </div>
          <ErrorMessage name="email">{(msg) => <div>{msg}</div>}</ErrorMessage>
        </Form>
      )}
    </Formik>
  )
}

export { FormCreateInvitation }
