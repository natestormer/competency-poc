import type { NextPage, GetServerSideProps } from "next"

import { addApolloState, initializeApollo } from "../../lib/apolloClient"
import {
  InvitationAcceptPageDocument,
  InvitationDocument,
  InvitationQuery,
} from "../../graphql/generated"
import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { FormAcceptInvitation } from "../../components/Form/AcceptInvitation"

const InvitationAcceptPage: NextPage = () => {
  const { query } = useRouter()
  const email =
    typeof query?.email === "string" ? query.email : query?.email?.[0]
  const { data } = useQuery<InvitationQuery>(InvitationDocument, {
    variables: { email: email },
  })
  const now = new Date()
  const expiryDate = new Date(data?.invitation?.expires)
  const invitationExpired = now.getTime() > expiryDate.getTime()

  if (query?.token !== data?.invitation?.id || !email) {
    return <div>Oops, something went wrong.</div>
  }

  return (
    <main role="main">
      <h1>Invitation Accept Page</h1>
      {invitationExpired ? (
        <p>Your invitation has expired</p>
      ) : (
        <FormAcceptInvitation email={email} />
      )}
    </main>
  )
}

export default InvitationAcceptPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo({ headers: context.req.headers })

  await apolloClient.query({
    query: InvitationAcceptPageDocument,
    variables: { email: context.query.email as never },
  })

  return addApolloState(apolloClient, {
    props: {},
  })
}
