const webpack = require('webpack')
const webpackBKConfig = require('./webpack.bk.config')

webpack(webpackBKConfig, function (err, stats) {
    // console.log(stats)
})