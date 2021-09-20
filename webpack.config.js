module.exports = (process.env.NODE_ENV === 'DEV')
    ? require('./webpack.config.dev.js')
    : require('./webpack.config.prod.js')