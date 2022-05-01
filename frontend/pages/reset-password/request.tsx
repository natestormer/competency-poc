import type { NextPage, GetServerSideProps } from "next"

import { addApolloState, initializeApollo } from "../../lib/apolloClient"
import { ResetPasswordRequestPageDocument } from "../../graphql/generated"
import { FormRequestPasswordReset } from "../../components/Form/RequestPasswordReset"

const ResetPasswordRequestPage: NextPage = () => {
  return (
    <main role="main">
      <h1>Reset Password</h1>
      <FormRequestPasswordReset />
    </main>
  )
}

export default ResetPasswordRequestPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo({ headers: context.req.headers })

  await apolloClient.query({ query: ResetPasswordRequestPageDocument })

  return addApolloState(apolloClient, {
    props: {},
  })
}
