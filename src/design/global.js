import { createGlobalStyle } from 'styled-components'
import { colors } from './colors'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'VT323', monospace;
    background-color: ${colors.darkGreen};
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

export const borderStyle = `
  outline: 0.1rem solid ${colors.black};
  border-width: 0.1rem;
  border-style: solid;
  border-color: ${colors.white} ${colors.mediumGrey} ${colors.mediumGrey} ${colors.white};
`

export default GlobalStyle
