import { createGlobalStyle } from 'styled-components'
import { colors } from './colors'
import ttf from './fonts/MS-Sans-Serif-8pt.ttf'
import ttfBold from './fonts/MS-Sans-Serif-8pt-bold.ttf'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'MS Sans Serif';
    src: url(${ttf}) format('truetype');
    font-style: normal;
    font-weight: normal;
  }
  @font-face {
    font-family: 'MS Sans Serif';
    src: url(${ttfBold}) format('truetype');
    font-style: normal;
    font-weight: bold;
  }

  body {
    margin: 0;
    font-family: 'MS Sans Serif', sans-serif;
    background-color: ${colors.darkGreen};
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
  box-shadow: inset -2px -2px 0 0 ${borderColor.outerBottomRight},
    inset 2px 2px 0 0 ${borderColor.outerTopLeft},
    inset -4px -4px 0 0 ${borderColor.innerBottomRight},
    inset 4px 4px 0 0 ${borderColor.innerTopLeft};
  border: 0;
`
export const hoverBorder = `
  box-shadow: inset -2px -2px 0 0 ${borderColor.innerTopLeft},
    inset 2px 2px 0 0 ${borderColor.innerBottomRight}, 
    inset -4px -4px 0 0 ${borderColor.outerTopLeft},
    inset 4px 4px 0 0 ${borderColor.outerBottomRight};
  border: 0;

  outline: 2px dotted ${colors.mediumGrey};
  outline-offset: -10px;
`
export const tableBorder = `
  box-shadow: inset -2px -2px 0 0 ${borderColor.innerTopLeft},
    inset 2px 2px 0 0 ${borderColor.innerBottomRight}, 
    inset -4px -4px 0 0 ${borderColor.outerTopLeft},
    inset 4px 4px 0 0 ${borderColor.outerBottomRight};
  border: 0;

  outline: 2px dotted ${colors.mediumGrey};
  outline-offset: -10px;
`

export default GlobalStyle
