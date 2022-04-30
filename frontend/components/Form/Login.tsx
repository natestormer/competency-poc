import { useEffect, useState } from "react"
import { ApolloError, useMutation } from "@apollo/client"
import { Field, Form, Formik, FormikHelpers, ErrorMessage } from "formik"
import {
  CurrentUserDocument,
  LoginDocument,
  LoginMutation,
} from "../../graphql/generated"
import * as Yup from "yup"

interface FormLoginValues {
  email: string
  password: string
}

const FormLoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required(),
  password: Yup.string().required(),
})

const FormLogin = () => {
  const [globalError, setGlobalError] = useState<ApolloError | Error | null>()
  const [login, { error }] = useMutation<LoginMutation>(LoginDocument)

  useEffect(() => {
    if (error) {
      setGlobalError(error)
    }
  }, [error])

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={FormLoginSchema}
      onSubmit={async (
        values: FormLoginValues,
        { setSubmitting, resetForm }: FormikHelpers<FormLoginValues>
      ) => {
        const { data } = await login({
          // apollo mutation function can override options passed
          // in hook call
          variables: values,
          // refetch current user query
          // this will refresh the UI to show the logged in state
          refetchQueries: [{ query: CurrentUserDocument }],
        })

        // response will NOT return a graphql error
        // instead, it returns a message and __typename we must check
        if (
          data?.authenticateUserWithPassword?.__typename ===
          "UserAuthenticationWithPasswordFailure"
        ) {
          // set global error
          setGlobalError({
            name: "authFail",
            message: "Email and password don't match",
          })
        } else {
          setSubmitting(false)
          setGlobalError(null)
          resetForm({
            values: {
              email: "",
              password: "",
            },
          })
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form method="POST">
          <h2>Log In to Your Account</h2>
          {globalError && <div>{globalError.message}</div>}
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
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
        </Form>
      )}
    </Formik>
  )
}

export { FormLogin }
