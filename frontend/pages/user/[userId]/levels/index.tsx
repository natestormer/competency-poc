import type { NextPage, GetServerSideProps } from "next"

import { addApolloState, initializeApollo } from "../../../../lib/apolloClient"
import {
  UserLevelsPageDocument,
  UserLevelsPageQuery,
} from "../../../../graphql/generated"
import { unAuthRedirect } from "../../../../config"
import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { FormSetLevels } from "../../../../components/Form/SetLevels"

const UserLevelsPage: NextPage = () => {
  const { query } = useRouter()
  const { data } = useQuery<UserLevelsPageQuery>(UserLevelsPageDocument, {
    variables: { userId: query.userId },
  })

  return (
    <main role="main">
      <h1>User Levels Page</h1>
      {data?.user?.assignedTeams && data?.user?.assignedTeams.length > 0 ? (
        <>
          {data.user.assignedTeams.map((team) => (
            <div key={team.id}>
              <h2>{team.name}</h2>
              {team.userLevels && team.userLevels.length > 0 ? (
                <div>Level graph</div>
              ) : (
                <FormSetLevels teamId={team.id} />
              )}
            </div>
          ))}
        </>
      ) : (
        <p>You are not assigned to a team</p>
      )}
    </main>
  )
}

export default UserLevelsPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo({ headers: context.req.headers })

  const { data } = await apolloClient.query<UserLevelsPageQuery>({
    query: UserLevelsPageDocument,
    variables: { userId: context.query.userId as never },
  })

  // check if user is logged in
  // if not, redirect to login page
  if (!data.authenticatedItem?.id) return unAuthRedirect

  return addApolloState(apolloClient, {
    props: {},
  })
}
