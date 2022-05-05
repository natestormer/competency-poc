import type { NextPage, GetServerSideProps } from "next"

import { addApolloState, initializeApollo } from "../../../../lib/apolloClient"
import {
  UserTeamsTeamPageDocument,
  UserTeamsTeamPageQuery,
} from "../../../../graphql/generated"
import { unAuthRedirect } from "../../../../config"
import { UserTeamNav } from "../../../../components/User/Team/Nav"
import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"

const UserTeamsTeamPage: NextPage = () => {
  const { query } = useRouter()
  const { data, error } = useQuery<UserTeamsTeamPageQuery>(
    UserTeamsTeamPageDocument,
    { variables: { id: query.teamId } }
  )

  return (
    <main role="main">
      <h1>{data?.team?.name || "Team"}</h1>
      {error ? (
        <p>Something went wrong...</p>
      ) : (
        <>
          <UserTeamNav />
          <h3>{data?.team?.name}</h3>
          <p>{data?.team?.description}</p>
          <h4>Members</h4>
          <ul style={{ padding: "0" }}>
            {data?.team?.members?.map((member) => (
              <li
                key={member.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2rem",
                  borderBottom: "1px solid black",
                }}
              >
                <h5>{member.fullName}</h5>
                <small>{member.email}</small>
              </li>
            ))}
          </ul>
        </>
      )}
    </main>
  )
}

export default UserTeamsTeamPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo({ headers: context.req.headers })

  const { data } = await apolloClient.query({
    query: UserTeamsTeamPageDocument,
    variables: { id: context.query.teamId as never },
  })

  // check if user is logged in
  // if not, redirect to login page
  if (!data.authenticatedItem?.id) return unAuthRedirect

  return addApolloState(apolloClient, {
    props: {},
  })
}
