const withFonts = require('next-fonts')
const nextConfig = withFonts({
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
      fileName: false
    }
  }
})

module.exports = nextConfig
