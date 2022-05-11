import { useQuery } from "@apollo/client"
import { GetServerSideProps, NextPage } from "next"
import { useRouter } from "next/router"

import { FormMatrix } from "../../../../../../components/Form/Matrix"
import { unAuthRedirect } from "../../../../../../config"
import {
  UserTeamsTeamSkillsCreatePageDocument,
  UserTeamsTeamSkillsCreatePageQuery,
} from "../../../../../../graphql/generated"
import {
  addApolloState,
  initializeApollo,
} from "../../../../../../lib/apolloClient"

const UserTeamSkillsCreate: NextPage = () => {
  const { query } = useRouter()
  const { data } = useQuery<UserTeamsTeamSkillsCreatePageQuery>(
    UserTeamsTeamSkillsCreatePageDocument,
    {
      variables: {
        teamId: query.teamId,
      },
    }
  )

  return (
    <main role="main">
      <h1>{data?.team?.name}</h1>
      <h2>Create Team Skills</h2>
      <FormMatrix />
    </main>
  )
}

export default UserTeamSkillsCreate

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo({ headers: context.req.headers })
  const { data } = await apolloClient.query<UserTeamsTeamSkillsCreatePageQuery>(
    {
      query: UserTeamsTeamSkillsCreatePageDocument,
      variables: { teamId: context.query.teamId as never },
    }
  )

  // check if user is logged in
  // if not, redirect to login page
  if (!data.authenticatedItem?.id) return unAuthRedirect

  return addApolloState(apolloClient, {
    props: {},
  })
}
