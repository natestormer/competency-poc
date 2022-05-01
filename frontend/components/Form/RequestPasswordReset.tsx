import { useMutation } from "@apollo/client"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { useState } from "react"
import {
  SendUserPasswordResetLinkDocument,
  SendUserPasswordResetLinkMutation,
} from "../../graphql/generated"

interface FormRequestPasswordResetValues {
  email: string
}

const FormRequestPasswordReset = () => {
  const [success, setSuccess] = useState<boolean>(false)
  const [requestReset, { error }] =
    useMutation<SendUserPasswordResetLinkMutation>(
      SendUserPasswordResetLinkDocument
    )

  return (
    <Formik
      initialValues={{
        email: "",
      }}
      onSubmit={async (
        values: FormRequestPasswordResetValues,
        { setSubmitting, resetForm }
      ) => {
        await requestReset({ variables: values })
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
          <h2>Reset Your Password</h2>
          {error && <div>{error.message}</div>}
          {success && (
            <p>Check your email for instructions to reset your password.</p>
          )}
          <div>
            <label htmlFor="email">
              Email
              <Field
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="Your email address"
              />
            </label>
          </div>
          <ErrorMessage name="email">{(msg) => <div>{msg}</div>}</ErrorMessage>
          <button type="submit" disabled={isSubmitting}>
            Request Reset
          </button>
        </Form>
      )}
    </Formik>
  )
}

export { FormRequestPasswordReset }
