module.exports = {
  env: {
    api_url: process.env.api_url,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/pt',
        permanent: false,
      },
    ]
  },
}
