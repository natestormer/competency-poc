import type { NextPage, GetServerSideProps } from "next"

import { addApolloState, initializeApollo } from "../../../lib/apolloClient"
import { UserPageDocument, UserPageQuery } from "../../../graphql/generated"
import { unAuthRedirect } from "../../../config"
import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"

const HomePage: NextPage = () => {
  const { query } = useRouter()
  const { data } = useQuery<UserPageQuery>(UserPageDocument, {
    variables: {
      userId: query.userId,
    },
  })

  return (
    <main role="main">
      <h1>User Page</h1>
      <pre>{JSON.stringify(data?.user, null, 2)}</pre>
    </main>
  )
}

export default HomePage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo({ headers: context.req.headers })

  const { data } = await apolloClient.query({
    query: UserPageDocument,
    variables: { userId: context.query.userId as never },
  })

  // check if user is logged in
  // if not, redirect to login page
  if (!data.authenticatedItem?.id) return unAuthRedirect

  return addApolloState(apolloClient, {
    props: {},
  })
}
