import type { AppProps } from "next/app"
import { ApolloProvider } from "@apollo/client"

import { useApollo } from "../lib/apolloClient"
import { Header } from "../components/Header"

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps)

  return (
    <ApolloProvider client={apolloClient}>
      <Header />
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
