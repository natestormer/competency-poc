import type { AppProps } from "next/app"
import Router from "next/router"
import { ApolloProvider } from "@apollo/client"
import NProgress from "nprogress"

import { useApollo } from "../lib/apolloClient"
import { Header } from "../components/Header"

import "../styles/nprogress.css"

Router.events.on("routeChangeStart", () => NProgress.start())
Router.events.on("routeChangeComplete", () => NProgress.done())
Router.events.on("routeChangeError", () => NProgress.done())

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
