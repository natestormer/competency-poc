import type { NextPage, GetServerSideProps } from "next"

import { addApolloState, initializeApollo } from "../../../../lib/apolloClient"
import {
  UserTeamsManagedPageDocument,
  UserTeamsManagedPageQuery,
} from "../../../../graphql/generated"
import { unAuthRedirect } from "../../../../config"
import { UserTeamNav } from "../../../../components/User/Team/Nav"
import { useQuery } from "@apollo/client"
import { UserTeamList } from "../../../../components/User/Team/List"
import { useRouter } from "next/router"

const UserTeamsManagedPage: NextPage = () => {
  const { query } = useRouter()
  const { data, error } = useQuery<UserTeamsManagedPageQuery>(
    UserTeamsManagedPageDocument,
    {
      variables: {
        userId: query.userId,
      },
    }
  )

  return (
    <main role="main">
      <h1>My Created Teams</h1>
      {error ? (
        <p>Something went wrong...</p>
      ) : (
        <>
          <UserTeamNav />
          <UserTeamList
            list={data?.user?.managedTeams}
            emptyMessage="You have no teams."
          />
        </>
      )}
    </main>
  )
}

export default UserTeamsManagedPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo({ headers: context.req.headers })

  const { data } = await apolloClient.query({
    query: UserTeamsManagedPageDocument,
    variables: { userId: context.query.userId as never },
  })

  // check if user is logged in
  // if not, redirect to login page
  if (!data.authenticatedItem?.id) return unAuthRedirect

  return addApolloState(apolloClient, {
    props: {},
  })
}
