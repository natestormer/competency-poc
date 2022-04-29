import { ApolloError, useQuery } from "@apollo/client"
import { CurrentUserDocument, CurrentUserQuery } from "../graphql/generated"

type useUserPayload = {
  user?: CurrentUserQuery["authenticatedItem"]
  loading: boolean
  error?: ApolloError
}

/**
 * Hook to get current logged in user
 * Note: CURRENT_USER_QUERY is also executed in APP_DATA_QUERY
 * and passed to getServerSideProps() for SSR on every page
 * @returns useUserPayload
 */
const useUser = (): useUserPayload => {
  const {
    data: user,
    loading,
    error,
  } = useQuery<CurrentUserQuery>(CurrentUserDocument)

  return { user: user?.authenticatedItem, loading, error }
}

export { useUser }
