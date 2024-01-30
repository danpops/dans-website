const withFonts = require('next-fonts')
const nextConfig = withFonts({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'i.discogs.com'
      }
    ]
  },
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
      fileName: false
    }
  }
})

module.exports = nextConfig
