import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/bootstrap.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Gradey Cullins</title>
        <meta name='description' content='Gradey Cullins personal site and portfolio. Programmer, entrepreneur, code blogger, freelancer.' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
