module.exports = {
  async redirects() {
    return [
      {
        source: '/p/:project*',
        destination: '/projects/:project*',
        permanent: true,
      },
      {
        source: '/t/:to*',
        destination: '/t/:to*',
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,
}
