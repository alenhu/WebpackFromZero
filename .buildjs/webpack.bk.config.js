const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const backendPath = path.resolve(__dirname,'../src/backend')
console.log(path.resolve(__dirname, 'build'), backendPath)
console.log('path.resolve(src)', path.resolve('src'))

module.exports = {
    entry: [
        path.join(backendPath,'index.js')
    ],
    output: {
        path: path.resolve(__dirname, 'backend'),
        libraryTarget: "commonjs2",
        filename: '[name].bundle.js'
        // chunkFilename: '[id].[name].[chunkhash].js'
    },
    mode: 'production',
    resolve: {
      // 自动解析确定的扩展
      extensions: ['.js', '.vue'],
      // 告诉 webpack 解析模块时应该搜索的目录
      modules: [
        path.resolve(__dirname, 'src'),
        'node_modules'
      ],
      alias: {
        'src': path.resolve(__dirname, './src')
      }
    },
    node: {
      console: 'mock',
      global: true,
      process: true,
      __filename: 'mock',
      __dirname: 'mock',
      Buffer: true,
      setImmediate: true
  
      // See "Other node core libraries" for additional options.
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          enforce: "pre",
          exclude: /node_modules/,
          // loader:"eslint-loader",
          // include: [path.resolve('src\backend')],
          use: [
            {
              loader: 'eslint-loader',
              options: { // 这里的配置项参数将会被传递到 eslint 的 CLIEngine 
                formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
              }
            }
          ],  
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
            ,
            plugins: [
              ["dynamic-import-node"]
            ]
          }
        }
      }

    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
        uglifyOptions: {
          output: {
            comments: false,
          },
          warnings: false,
          compress: {},
          mangle: true
        },
        
      }),
    ]
  },
    plugins: [
        // 构建优化插件
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin({analyzerPort:8081})
    ]
}