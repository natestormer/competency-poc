import { ApolloError, useMutation } from "@apollo/client"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { now } from "lodash"
import Link from "next/link"
import { useEffect, useState } from "react"
import * as Yup from "yup"
import {
  AcceptInvitationAndCreateUserDocument,
  AcceptInvitationAndCreateUserMutation,
} from "../../graphql/generated"

interface FormAcceptInvitationProps {
  email: string
}

interface FormAcceptInvitationValues {
  firstName: string
  lastName: string
  password: string
  passwordConfirm: string
}

const FormAcceptInvitationSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  password: Yup.string().required(),
  // https://til.hashrocket.com/posts/vahuw4phan-check-the-password-confirmation-with-yup
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords must match")
    .required(),
})

const FormAcceptInvitation = ({ email }: FormAcceptInvitationProps) => {
  const now = new Date()
  const [success, setSuccess] = useState<boolean>(false)
  const [globalError, setGlobalError] = useState<ApolloError | Error | null>()
  const [acceptInvitation, { error }] =
    useMutation<AcceptInvitationAndCreateUserMutation>(
      AcceptInvitationAndCreateUserDocument
    )

  useEffect(() => {
    if (error) setGlobalError(error)
  }, [error])

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        password: "",
        passwordConfirm: "",
      }}
      validationSchema={FormAcceptInvitationSchema}
      onSubmit={async (
        values: FormAcceptInvitationValues,
        { setSubmitting, resetForm }
      ) => {
        const { data } = await acceptInvitation({
          variables: {
            firstName: values.firstName,
            lastName: values.lastName,
            password: values.password,
            email,
            accepted: now.toISOString(),
          },
        })

        if (data?.createUser?.id) {
          setSubmitting(false)
          resetForm({
            values: {
              firstName: "",
              lastName: "",
              password: "",
              passwordConfirm: "",
            },
          })
          setSuccess(true)
        } else {
          setGlobalError({
            name: "signupError",
            message: "Something went wrong. Please try again.",
          })
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form method="POST">
          <h2>Create your account</h2>
          {globalError && <div>{globalError.message}</div>}
          {success && (
            <p>
              Success! Please <Link href="/login?next=/">log in</Link>.
            </p>
          )}
          <p>
            <strong>Email:</strong> {email}
          </p>
          <div>
            <label htmlFor="firstName">
              First Name
              <Field
                type="firstName"
                id="firstName"
                name="firstName"
                placeholder="First Name"
              />
            </label>
          </div>
          <ErrorMessage name="firstName">
            {(msg) => <div>{msg}</div>}
          </ErrorMessage>
          <div>
            <label htmlFor="lastName">
              Last Name
              <Field
                type="lastName"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
              />
            </label>
          </div>
          <ErrorMessage name="lastName">
            {(msg) => <div>{msg}</div>}
          </ErrorMessage>
          <div>
            <label htmlFor="password">
              Password
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
              Confirm Password
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
            Create Account!
          </button>
        </Form>
      )}
    </Formik>
  )
}

export { FormAcceptInvitation }
