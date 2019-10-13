const path = require('path')
const webpack = require('webpack')
const backendPath = path.resolve(__dirname,'../src/backend')
console.log(path.resolve(__dirname, 'build'), backendPath)


module.exports = {
    entry: [
        path.join(backendPath,'index.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    plugins: [
        // 构建优化插件
    ]
}