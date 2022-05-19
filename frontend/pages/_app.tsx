import type { AppProps } from "next/app"
import Router from "next/router"
import { ApolloProvider } from "@apollo/client"
import NProgress from "nprogress"
import { createGlobalStyle } from "styled-components"

import { useApollo } from "../lib/apolloClient"
import { Header } from "../components/Header"

import "../styles/nprogress.css"

Router.events.on("routeChangeStart", () => NProgress.start())
Router.events.on("routeChangeComplete", () => NProgress.done())
Router.events.on("routeChangeError", () => NProgress.done())

// https://github.com/vercel/next.js/blob/canary/examples/with-styled-components/pages/_app.js
const GlobalStyle = createGlobalStyle`
  :root {
    --primary-rgb-vals: 15, 120, 89;
    --primary-hex: #0F7859;
    --primary: rgba(var(--primary-rgb-vals), 1);
  }

  a {
    color: var(--primary);
  }
`

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps)

  return (
    <>
      <GlobalStyle />
      <ApolloProvider client={apolloClient}>
        <Header />
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}

export default MyApp
