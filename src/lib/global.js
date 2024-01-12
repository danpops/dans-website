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
    background-color: ${props => props.theme.primary};
  }

  a {
    color: #00f;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`
export const borderStyle = props => `
  box-shadow: inset -2px -2px 0 0 ${props.theme.border.outerBottomRight},
    inset 2px 2px 0 0 ${props.theme.border.outerTopLeft},
    inset -4px -4px 0 0 ${props.theme.border.innerBottomRight},
    inset 4px 4px 0 0 ${props.theme.border.innerTopLeft};
  border: 0;
`
export const hoverBorder = props => `
  box-shadow: inset -2px -2px 0 0 ${props.theme.border.innerTopLeft},
    inset 2px 2px 0 0 ${props.theme.border.innerBottomRight}, 
    inset -4px -4px 0 0 ${props.theme.border.outerTopLeft},
    inset 4px 4px 0 0 ${props.theme.border.outerBottomRight};
  border: 0;
  outline: 2px dotted ${colors.mediumGrey};
  outline-offset: -10px;
`
export const tableBorder = props => `
  box-shadow: inset -2px -2px 0 0 ${props.theme.border.innerTopLeft},
    inset 2px 2px 0 0 ${props.theme.border.innerBottomRight}, 
    inset -4px -4px 0 0 ${props.theme.border.outerTopLeft},
    inset 4px 4px 0 0 ${props.theme.border.outerBottomRight};
  border: 0;
`

export default GlobalStyle
