import type { NextPage, GetServerSideProps } from "next"

import { addApolloState, initializeApollo } from "../lib/apolloClient"
import { LoginPageDocument } from "../graphql/generated"
import { FormsLogin } from "../components/Forms/Login"

const LoginPage: NextPage = () => {
  return (
    <main role="main">
      <h1>Login Page</h1>
      <FormsLogin />
    </main>
  )
}

export default LoginPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo({ headers: context.req.headers })

  await apolloClient.query({ query: LoginPageDocument })

  return addApolloState(apolloClient, {
    props: {},
  })
}
