import { createGlobalStyle } from 'styled-components'
import { colors } from './colors'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Verdana', 'Geneva', 'Trebuchet MS', sans-serif;
    background-color: ${colors.green};
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
