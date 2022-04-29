import type { NextPage, GetServerSideProps } from "next"

import { addApolloState, initializeApollo } from "../lib/apolloClient"
import { useUser } from "../hooks"
import { HomePageDocument } from "../graphql/generated"

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

  await apolloClient.query({ query: HomePageDocument })

  return addApolloState(apolloClient, {
    props: {},
  })
}
