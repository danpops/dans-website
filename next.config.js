const withFonts = require('next-fonts')
const nextConfig = withFonts({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.discogs.com',
        port: '',
        pathname: '/**'
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
