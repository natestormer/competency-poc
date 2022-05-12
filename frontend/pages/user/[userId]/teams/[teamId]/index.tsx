import type { NextPage, GetServerSideProps } from "next"

import {
  addApolloState,
  initializeApollo,
} from "../../../../../lib/apolloClient"
import {
  UserTeamsTeamPageDocument,
  UserTeamsTeamPageQuery,
} from "../../../../../graphql/generated"
import { unAuthRedirect } from "../../../../../config"
import { UserTeamNav } from "../../../../../components/User/Team/Nav"
import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import Link from "next/link"
import { UserTeamSkillsList } from "../../../../../components/User/Team/SkillsList"
import { useUser } from "../../../../../hooks"

const UserTeamsTeamPage: NextPage = () => {
  const { user } = useUser()
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
          {data?.team?.members && data?.team?.members?.length > 0 ? (
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
                  <Link href={`/user/${member.id}`} passHref>
                    <a>
                      <h5>{member.fullName}</h5>
                      <small>{member.email}</small>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div>
              <p>No team members</p>
              {/* @Todo: add link to invite users to team */}
            </div>
          )}
          <Link href={`/user/${query.userId}/teams/${query.teamId}/invite`}>
            Invite
          </Link>

          <h4>Skill Matrix</h4>
          {data?.team?.skills && data.team.skills.length ? (
            <>
              <UserTeamSkillsList skills={data.team.skills} />
              <Link
                href={`/user/${query.userId}/teams/${query.teamId}/skills/update`}
              >
                Edit Skills
              </Link>
            </>
          ) : (
            <Link
              href={`/user/${query.userId}/teams/${query.teamId}/skills/create`}
            >
              Create Skills
            </Link>
          )}
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
