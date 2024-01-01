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
const borderColor = {
  innerBottomRight: colors.mediumGrey,
  innerTopLeft: colors.lightGrey,
  outerBottomRight: colors.black,
  outerTopLeft: colors.white
}
export const borderStyle = `
  box-shadow: inset -1px -1px 0 0 ${borderColor.outerBottomRight},
    inset 1px 1px 0 0 ${borderColor.outerTopLeft}, 
    inset -2px -2px 0 0 ${borderColor.innerBottomRight},
    inset 2px 2px 0 0 ${borderColor.innerTopLeft};
  border: 0;
`
export const hoverBorder = `
  box-shadow: inset -1px -1px 0 0 ${borderColor.innerTopLeft},
    inset 1px 1px 0 0 ${borderColor.innerBottomRight}, 
    inset -2px -2px 0 0 ${borderColor.outerTopLeft},
    inset 2px 2px 0 0 ${borderColor.outerBottomRight};
  border: 0;

  outline: 2px dotted #333333; /* Assuming 'space.1' corresponds to 2px and 'colors.borderDarkest' corresponds to #333333 */
  outline-offset: -10px;
`

export default GlobalStyle
