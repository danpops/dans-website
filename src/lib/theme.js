export const colors = {
  darkBlue: '#000E7A',
  yellow: '#FFFF00',
  blueSecondary: '#357EC7',
  grey: '#C0C0C0',
  mediumGrey: '#808080',
  lightGrey: '#CCCCCC',
  black: '#000000',
  white: '#FFFFFF',
  darkBackground: '#121212',
  darkFont: '#FFFFFF',
  darkButton: '#263238',
  darkButtonDisabled: '#546E7A',
  darkBlueHover: '#004080',
  rustyOrange: '#CA8138',
  charcoal: '#3F3F3F',
  lavenderBlush: '#F7D8FA',
  darkSlateGrey: '#333333',
  slateGrey: '#7F7F7F',
  blue: '#0000FF',
  paleGolden: '#FFF185'
}
export const lightTheme = {
  primary: colors.blueSecondary,
  secondary: colors.grey,
  font: colors.black,
  heroTitle: colors.blue,
  button: colors.lightGrey,
  buttonDisabled: colors.mediumGrey,
  marquee: colors.yellow,
  windowHeader: colors.darkBlue,
  windowTitle: colors.white,
  table: {
    header: colors.grey,
    row: {
      bg: colors.white,
      font: colors.black,
      hover: colors.darkBlue,
      hoverFont: colors.white
    }
  },
  border: {
    innerBottomRight: colors.mediumGrey,
    innerTopLeft: colors.lightGrey,
    outerBottomRight: colors.black,
    outerTopLeft: colors.white
  }
}
export const darkTheme = {
  primary: colors.rustyOrange,
  secondary: colors.charcoal,
  font: colors.white,
  heroTitle: colors.lavenderBlush,
  button: colors.darkSlateGrey,
  buttonDisabled: colors.slateGrey,
  marquee: colors.blue,
  windowHeader: colors.paleGolden,
  windowTitle: colors.black,
  table: {
    header: colors.charcoal,
    row: {
      bg: colors.black,
      font: colors.white,
      hover: colors.paleGolden,
      hoverFont: colors.black
    }
  },
  border: {
    innerBottomRight: colors.darkSlateGrey,
    innerTopLeft: colors.slateGrey,
    outerBottomRight: colors.black,
    outerTopLeft: colors.grey
  }
}
