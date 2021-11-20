import { AppProps } from 'next/app'
import Head from 'next/head'
import ProductsProvider from '../context/productsContext'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ShopApp</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000" />
      </Head>
      <GlobalStyles />
      <ProductsProvider>
        <Component {...pageProps} />
      </ProductsProvider>
    </>
  )
}

export default App
