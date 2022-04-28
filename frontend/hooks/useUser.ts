import { ApolloError, useQuery } from "@apollo/client"

import { CURRENT_USER_QUERY } from "../graphql/queries/currentUser"

type useUserPayload = {
  user?: any
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
  const { data: user, loading, error } = useQuery(CURRENT_USER_QUERY)

  return { user: user.authenticatedItem, loading, error }
}

export { useUser }
