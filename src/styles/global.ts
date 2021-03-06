import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  html {
    font-size: 100%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: 'Inter', sans-serif;
    padding: 40px;
  }
`

export default GlobalStyles
