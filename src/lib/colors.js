export const colors = {
  darkBlue: '#000e7a',
  darkGreen: '#00665e',
  red: '#e35f5f',
  yellow: '#ffff00',
  blue: '#0827f5',
  blueSecondary: '#357EC7',
  grey: '#c0c0c0',
  mediumGrey: '#808080',
  lightGrey: '#CCCCCC',
  black: '#000000',
  white: '#FFFFFF',
  darkBackground: '#121212',
  darkFont: '#FFFFFF',
  darkButton: '#263238',
  darkButtonDisabled: '#546e7a',
  darkBlueHover: '#004080'
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
  primary: colors.darkGreen,
  secondary: colors.mediumGrey,
  font: colors.darkFont,
  heroTitle: colors.darkBlue,
  button: colors.darkButton,
  buttonDisabled: colors.darkButtonDisabled,
  marquee: colors.darkBlue,
  windowHeader: colors.darkBackground,
  windowTitle: colors.white,
  table: {
    header: colors.grey,
    row: {
      bg: colors.darkBackground,
      font: colors.darkFont,
      hover: colors.darkBlueHover,
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
