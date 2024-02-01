const withFonts = require('next-fonts')
const nextConfig = withFonts({
  env: {
    DISCOGS_KEY: process.env.DISCOGS_KEY,
    API_KEY: process.env.API_KEY,
    API_URL: process.env.API_URL
  },
  images: {
    unoptimized: true,
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
