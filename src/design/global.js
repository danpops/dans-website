import { createGlobalStyle } from 'styled-components'
import { colors } from './colors'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'VT323', monospace;
    background-color: ${colors.lightGreen};
  }

  code {
    font-family: 'Courier New', Courier, monospace;
  }

  a {
    color: #00f;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`

export default GlobalStyle
