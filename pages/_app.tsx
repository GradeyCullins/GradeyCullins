import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/bootstrap.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Gradey Cullins</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
