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
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
        />
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
