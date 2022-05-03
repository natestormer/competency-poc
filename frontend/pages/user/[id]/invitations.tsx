import type { NextPage, GetServerSideProps } from "next"

import { addApolloState, initializeApollo } from "../../../lib/apolloClient"
import { UserInvitationPageDocument } from "../../../graphql/generated"
import { unAuthRedirect } from "../../../config"
import { UserInviteManage } from "../../../components/User/Invite/Manage"

const HomePage: NextPage = () => {
  return (
    <main role="main">
      <h1>Invitations</h1>
      <UserInviteManage />
    </main>
  )
}

export default HomePage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo({ headers: context.req.headers })

  const { data } = await apolloClient.query({
    query: UserInvitationPageDocument,
  })

  // check if user is logged in
  // if not, redirect to login page
  if (!data.authenticatedItem?.id) return unAuthRedirect

  return addApolloState(apolloClient, {
    props: {},
  })
}
