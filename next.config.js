module.exports = {
    basePath: '',
    images: {
        domains: ['image.tmdb.org']
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/search',
                permanent: true
            }
        ]
    },
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          issuer: { and: [/\.(js|ts)x?$/] },
          
          use: ['@svgr/webpack'],
        });
    
        return config;
      },
}