import { GetServerSideProps, NextPage } from "next"

import { FormMatrix } from "../../../../../../components/Form/Matrix"
import { unAuthRedirect } from "../../../../../../config"
import { UserTeamsTeamSkillsCreatePageDocument } from "../../../../../../graphql/generated"
import {
  addApolloState,
  initializeApollo,
} from "../../../../../../lib/apolloClient"

const UserTeamSkillsCreate: NextPage = () => {
  return (
    <main role="main">
      <h1>Create Team Skills</h1>
      <FormMatrix />
    </main>
  )
}

export default UserTeamSkillsCreate

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo({ headers: context.req.headers })
  const { data } = await apolloClient.query({
    query: UserTeamsTeamSkillsCreatePageDocument,
    variables: { teamId: context.query.teamId as never },
  })

  // check if user is logged in
  // if not, redirect to login page
  if (!data.authenticatedItem?.id) return unAuthRedirect

  return addApolloState(apolloClient, {
    props: {},
  })
}
