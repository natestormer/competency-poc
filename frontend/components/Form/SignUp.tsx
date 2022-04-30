import { ApolloError, useMutation } from "@apollo/client"
import { ErrorMessage, Field, Form, Formik } from "formik"
import Link from "next/link"
import { useEffect, useState } from "react"
import * as Yup from "yup"
import { SignUpDocument, SignUpMutation } from "../../graphql/generated"

interface FormSignUpValues {
  email: string
  firstName: string
  lastName: string
  password: string
  passwordConfirm: string
}

const FormSignUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required(),
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  password: Yup.string().required(),
  // https://til.hashrocket.com/posts/vahuw4phan-check-the-password-confirmation-with-yup
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords must match")
    .required(),
})

const FormSignUp = () => {
  const [success, setSuccess] = useState<boolean>(false)
  const [globalError, setGlobalError] = useState<ApolloError | Error | null>()
  const [signup, { error }] = useMutation<SignUpMutation>(SignUpDocument)

  useEffect(() => {
    if (error) setGlobalError(error)
  }, [error])

  return (
    <Formik
      initialValues={{
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        passwordConfirm: "",
      }}
      validationSchema={FormSignUpSchema}
      onSubmit={async (
        values: FormSignUpValues,
        { setSubmitting, resetForm }
      ) => {
        const { data } = await signup({ variables: values })

        if (data?.createUser?.id) {
          setSubmitting(false)
          resetForm({
            values: {
              email: "",
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
          <h2>Create an Account</h2>
          {globalError && <div>{globalError.message}</div>}
          {success && (
            <p>
              Success! Please <Link href="/login?next=/">log in</Link>.
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
            Sign Up!
          </button>
        </Form>
      )}
    </Formik>
  )
}

export { FormSignUp }
