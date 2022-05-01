import { ApolloError, useMutation } from "@apollo/client"
import { ErrorMessage, Field, Form, Formik } from "formik"
import Link from "next/link"
import { useEffect, useState } from "react"
import * as Yup from "yup"
import {
  PasswordResetDocument,
  PasswordResetMutation,
} from "../../graphql/generated"

interface FormPasswordResetProps {
  token: string
}

interface FormPasswordResetValues {
  email: string
  password: string
  passwordConfirm: string
}

const FormPasswordResetSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required(),
  password: Yup.string().required(),
  // https://til.hashrocket.com/posts/vahuw4phan-check-the-password-confirmation-with-yup
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords must match")
    .required(),
})

const FormPasswordReset = ({ token }: FormPasswordResetProps) => {
  const [success, setSuccess] = useState<boolean>(false)
  const [globalError, setGlobalError] = useState<ApolloError | Error | null>()
  const [resetPassword, { error }] = useMutation<PasswordResetMutation>(
    PasswordResetDocument
  )

  useEffect(() => {
    if (error) setGlobalError(error)
  }, [error])

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        passwordConfirm: "",
      }}
      validationSchema={FormPasswordResetSchema}
      onSubmit={async (
        values: FormPasswordResetValues,
        { setSubmitting, resetForm }
      ) => {
        const { data } = await resetPassword({
          variables: {
            email: values.email,
            password: values.password,
            token,
          },
        })

        switch (data?.redeemUserPasswordResetToken?.code) {
          case "FAILURE":
            setGlobalError({
              name: "resetFailure",
              message: data.redeemUserPasswordResetToken.message,
            })
            break
          case "TOKEN_EXPIRED":
            setGlobalError({
              name: "resetTokenExpired",
              message: data.redeemUserPasswordResetToken.message,
            })
            break
          case "TOKEN_REDEEMED":
            setGlobalError({
              name: "resetTokenRedeemed",
              message:
                "Your token has been redeemed. Please login or request a password resest",
            })
            break
          default:
            setSubmitting(false)
            resetForm({
              values: {
                email: "",
                password: "",
                passwordConfirm: "",
              },
            })
            setSuccess(true)
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form method="POST">
          <h2>Create a New Password</h2>
          {globalError && <div>{globalError.message}</div>}
          {success && (
            <p>
              Password reset! Please <Link href="/login?next=/">log in</Link>.
            </p>
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
          <div>
            <label htmlFor="password">
              New Password
              <Field
                type="password"
                id="password"
                name="password"
                autoComplete="password"
                placeholder="Your password"
              />
            </label>
          </div>
          <ErrorMessage name="password">
            {(msg) => <div>{msg}</div>}
          </ErrorMessage>
          <div>
            <label htmlFor="passwordConfirm">
              Confirm New Password
              <Field
                type="password"
                id="passwordConfirm"
                name="passwordConfirm"
                autoComplete="password"
                placeholder="Retype your password"
              />
            </label>
          </div>
          <ErrorMessage name="passwordConfirm">
            {(msg) => <div>{msg}</div>}
          </ErrorMessage>
          <button type="submit" disabled={isSubmitting}>
            Reset Password
          </button>
        </Form>
      )}
    </Formik>
  )
}

export { FormPasswordReset }
