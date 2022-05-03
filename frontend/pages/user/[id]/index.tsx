import type { NextPage, GetServerSideProps } from "next"

import { addApolloState, initializeApollo } from "../../../lib/apolloClient"
import { useUser } from "../../../hooks"
import { UserPageDocument } from "../../../graphql/generated"
import { unAuthRedirect } from "../../../config"

const HomePage: NextPage = () => {
  const { user } = useUser()

  return (
    <main role="main">
      <h1>User Page</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </main>
  )
}

export default HomePage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo({ headers: context.req.headers })

  const { data } = await apolloClient.query({ query: UserPageDocument })

  // check if user is logged in
  // if not, redirect to login page
  if (!data.authenticatedItem?.id) return unAuthRedirect

  return addApolloState(apolloClient, {
    props: {},
  })
}
