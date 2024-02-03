const withFonts = require('next-fonts')
const nextConfig = withFonts({
  env: {
    DISCOGS_KEY: process.env.DISCOGS_KEY,
    CONTACT_API_KEY: process.env.CONTACT_API_KEY,
    CONTACT_API_URL: process.env.CONTACT_API_URL
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
