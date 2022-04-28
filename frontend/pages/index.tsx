import type { NextPage, GetServerSideProps } from "next"
import { gql } from "@apollo/client"

import { addApolloState, initializeApollo } from "../lib/apolloClient"
import { REQUIRED_APP_DATA_QUERY_FIELDS } from "../graphql/fragments"
import { useUser } from "../hooks"

export const HOME_PAGE_QUERY = gql`
  ${REQUIRED_APP_DATA_QUERY_FIELDS}

  query HOME_PAGE_QUERY {
    ...requiredAppDataQueryFields
  }
`

const HomePage: NextPage = () => {
  const { user } = useUser()

  return (
    <main role="main">
      <h1>Homepage</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </main>
  )
}

export default HomePage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo({ headers: context.req.headers })

  await apolloClient.query({ query: HOME_PAGE_QUERY })

  return addApolloState(apolloClient, {
    props: {},
  })
}
