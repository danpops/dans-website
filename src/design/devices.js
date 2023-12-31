const breakpoints = {
  xs: 320,
  sm: 425,
  md: 768,
  lg: 1440,
  xl: 2560
}

const devices = {
  md: `(min-width: ${breakpoints.md}px)`,
  lg: `(min-width: ${breakpoints.lg}px)`,
  xl: `(min-width: ${breakpoints.xl}px)`
}

export { breakpoints, devices }
