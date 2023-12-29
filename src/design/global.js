import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Verdana', 'Geneva', 'Trebuchet MS', sans-serif;
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
