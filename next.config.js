module.exports = {
    basePath: '',
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/search',
            }
        ]
    }
}