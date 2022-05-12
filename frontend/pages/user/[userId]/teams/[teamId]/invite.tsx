import type { NextPage, GetServerSideProps } from "next"

import {
  addApolloState,
  initializeApollo,
} from "../../../../../lib/apolloClient"
import {
  UserTeamsTeamInvitePageDocument,
  UserTeamsTeamInvitePageQuery,
  UserTeamsTeamPageDocument,
} from "../../../../../graphql/generated"
import { unAuthRedirect } from "../../../../../config"
import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { FormInviteTeamUser } from "../../../../../components/Form/InviteTeamUser"

const UserTeamsTeamPage: NextPage = () => {
  const { query } = useRouter()
  const { data } = useQuery<UserTeamsTeamInvitePageQuery>(
    UserTeamsTeamInvitePageDocument,
    { variables: { teamId: query.teamId } }
  )

  return (
    <main role="main">
      <h1>{data?.team?.name || "Team"}</h1>
      <FormInviteTeamUser />
    </main>
  )
}

export default UserTeamsTeamPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo({ headers: context.req.headers })

  const { data } = await apolloClient.query<UserTeamsTeamInvitePageQuery>({
    query: UserTeamsTeamInvitePageDocument,
    variables: { teamId: context.query.teamId as never },
  })

  // check if user is logged in
  // if not, redirect to login page
  if (!data.authenticatedItem?.id) return unAuthRedirect

  return addApolloState(apolloClient, {
    props: {},
  })
}
