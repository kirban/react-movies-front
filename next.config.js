module.exports = {
    basePath: '/search',
    async redirects() {
        return [
            {
                source: '/',
                destination: '/search',
            }
        ]
    }
}