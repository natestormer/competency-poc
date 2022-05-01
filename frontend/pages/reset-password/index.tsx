import type { NextPage, GetServerSideProps } from "next"

import { addApolloState, initializeApollo } from "../../lib/apolloClient"
import { ResetPasswordPageDocument } from "../../graphql/generated"
import { FormPasswordReset } from "../../components/Form/PasswordReset"
import { useRouter } from "next/router"
import Link from "next/link"

const ResetPasswordPage: NextPage = () => {
  const { query } = useRouter()

  return (
    <main role="main">
      <h1>Reset Password</h1>
      {query.token ? (
        <FormPasswordReset token={query.token as string} />
      ) : (
        <p>
          Need to reset your password?{" "}
          <Link href="/reset-password/request">Click here</Link> to request a
          reset.
        </p>
      )}
    </main>
  )
}

export default ResetPasswordPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo({ headers: context.req.headers })

  await apolloClient.query({ query: ResetPasswordPageDocument })

  return addApolloState(apolloClient, {
    props: {},
  })
}
