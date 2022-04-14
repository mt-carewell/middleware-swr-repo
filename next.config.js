/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return (
      [
        {
          source: "/redirect/me/please/",
          destination: "/",
          permanent: true
        }
      ]
    )
  }
}

module.exports = nextConfig
