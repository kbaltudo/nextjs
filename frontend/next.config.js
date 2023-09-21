/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost:1337", "localhost", "images.ctfassets.net"]
  },
  async redirects() {
    return [
      // List of redirect items
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },

}

module.exports = nextConfig
