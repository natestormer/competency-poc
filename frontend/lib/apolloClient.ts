// See: https://github.com/vercel/next.js/tree/canary/examples/with-apollo
// TS support added from example: https://www.youtube.com/watch?v=syV82gmnPbc
import { useMemo } from "react"
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  HttpOptions,
  InMemoryCache,
  NormalizedCache,
} from "@apollo/client"
import { onError } from "@apollo/link-error"
//import { concatPagination } from "@apollo/client/utilities"
import merge from "deepmerge"
import isEqual from "lodash/isEqual"

import { devEndpoint, prodEndpoint } from "../config"

export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__"

export const graphqlEndpoint =
  process.env.NODE_ENV === "production" ? prodEndpoint : devEndpoint
let apolloClient: ApolloClient<NormalizedCache>

function apolloLink(headers?: HttpOptions["headers"] | any) {
  return new HttpLink({
    uri: graphqlEndpoint, // Server URL (must be absolute)
    credentials: "include", // Additional fetch() options like `credentials` or `headers`
    headers, // Send along headers to include the auth token
  })
}

function errorLink() {
  return onError(({ graphQLErrors, networkError }) => {
    // receive graphQL errors and log them to console
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      )
    // network errors from backend
    if (networkError)
      console.log(
        `[Network error]: ${networkError}. Backend is unreachable. Is it running?`
      )
  })
}

function createApolloClient(headers?: HttpOptions["headers"]) {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: ApolloLink.from([
      // @ts-ignore
      errorLink(),
      apolloLink(headers),
    ]),
    cache: new InMemoryCache(),
  })
}

export type initializeApolloArgs = {
  initialState?: any
  headers?: HttpOptions["headers"] | any
}

export function initializeApollo({
  initialState,
  headers,
}: initializeApolloArgs) {
  const _apolloClient = apolloClient ?? createApolloClient(headers)

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()

    // Merge the initialState from getStaticProps/getServerSideProps in the existing cache
    const data = merge(existingCache, initialState, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    })

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function addApolloState(
  client: ApolloClient<NormalizedCache>,
  pageProps: { props: any }
) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
  }

  return pageProps
}

export function useApollo(pageProps: any) {
  const state = pageProps[APOLLO_STATE_PROP_NAME]
  const store = useMemo(
    () => initializeApollo({ initialState: state }),
    [state]
  )
  return store
}
