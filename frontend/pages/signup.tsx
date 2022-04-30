import type { NextPage, GetServerSideProps } from "next"

import { addApolloState, initializeApollo } from "../lib/apolloClient"
import { SignUpPageDocument } from "../graphql/generated"
import { FormSignUp } from "../components/Form/SignUp"

const SignUpPage: NextPage = () => {
  return (
    <main role="main">
      <h1>SignUp Page</h1>
      <FormSignUp />
    </main>
  )
}

export default SignUpPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo({ headers: context.req.headers })

  await apolloClient.query({ query: SignUpPageDocument })

  return addApolloState(apolloClient, {
    props: {},
  })
}
