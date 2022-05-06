import type { NextPage, GetServerSideProps } from "next"

import { addApolloState, initializeApollo } from "../../../../lib/apolloClient"
import {
  UserTeamsCreatePageDocument,
  UserTeamsCreatePageQuery,
} from "../../../../graphql/generated"
import { unAuthRedirect } from "../../../../config"
import { UserTeamNav } from "../../../../components/User/Team/Nav"
import { FormCreateTeam } from "../../../../components/Form/CreateTeam"

const UserTeamsCreatePage: NextPage = () => {
  return (
    <main role="main">
      <h1>Create a Team</h1>
      <UserTeamNav />
      <FormCreateTeam />
    </main>
  )
}

export default UserTeamsCreatePage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo({ headers: context.req.headers })

  const { data } = await apolloClient.query<UserTeamsCreatePageQuery>({
    query: UserTeamsCreatePageDocument,
  })

  // check if user is logged in
  // if not, redirect to login page
  if (!data.authenticatedItem?.id) return unAuthRedirect

  return addApolloState(apolloClient, {
    props: {},
  })
}
