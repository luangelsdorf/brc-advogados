module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/pt',
                permanent: true,
            },
        ]
    },
}