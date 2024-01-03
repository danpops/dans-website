const withFonts = require('next-fonts')
const nextConfig = withFonts({
  images: {
    domains: ['i.discogs.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.discogs.com'
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
