import type { NextPage, GetServerSideProps } from "next"
import { gql } from "@apollo/client"

import { addApolloState, initializeApollo } from "../lib/apolloClient"
import { REQUIRED_APP_DATA_QUERY_FIELDS } from "../graphql/fragments"

export const LOGIN_PAGE_QUERY = gql`
  ${REQUIRED_APP_DATA_QUERY_FIELDS}

  query LOGIN_PAGE_QUERY {
    ...requiredAppDataQueryFields
  }
`

const LoginPage: NextPage = () => {
  return (
    <main role="main">
      <h1>Login Page</h1>
    </main>
  )
}

export default LoginPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo({ headers: context.req.headers })

  await apolloClient.query({ query: LOGIN_PAGE_QUERY })

  return addApolloState(apolloClient, {
    props: {},
  })
}
