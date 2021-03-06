import type { NextPage, GetServerSideProps } from "next"
import { useRouter } from "next/router"

import { addApolloState, initializeApollo } from "../../../../lib/apolloClient"
import {
  UserTeamsCreatedPageDocument,
  UserTeamsCreatedPageQuery,
} from "../../../../graphql/generated"
import { unAuthRedirect } from "../../../../config"
import { UserTeamNav } from "../../../../components/User/Team/Nav"
import { useQuery } from "@apollo/client"
import { UserTeamList } from "../../../../components/User/Team/List"

const UserTeamsCreatedPage: NextPage = () => {
  const { query } = useRouter()
  const { data, error } = useQuery<UserTeamsCreatedPageQuery>(
    UserTeamsCreatedPageDocument,
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
            list={data?.user?.authoredTeams}
            emptyMessage="You have no teams."
          />
        </>
      )}
    </main>
  )
}

export default UserTeamsCreatedPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo({ headers: context.req.headers })

  const { data } = await apolloClient.query({
    query: UserTeamsCreatedPageDocument,
    variables: { userId: context.query.userId as never },
  })

  // check if user is logged in
  // if not, redirect to login page
  if (!data.authenticatedItem?.id) return unAuthRedirect

  return addApolloState(apolloClient, {
    props: {},
  })
}
