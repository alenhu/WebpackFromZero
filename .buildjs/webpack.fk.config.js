const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const frontendPath = path.resolve(__dirname,'../src/frontend')
console.log(path.resolve(__dirname, 'build'), frontendPath)
console.log('path.resolve(src)', path.resolve('src'))
const frontend = {
  entry: {
    index: path.join(frontendPath,'index.js'),
    second: path.join(frontendPath,'second.js')
  },
  mode: "production",
  output: {
    // publicPath: "/",
    path: path.resolve(__dirname, 'app'),
    filename: '[name].bundle.js'
  },
  resolve: { extensions: ['.js', '.vue', '.json'],
  alias: {
    'vue$': 'vue/dist/vue.esm.js',
  }},
  module: {
    rules: [
      
      {
        test: /\.(js|vue)$/,
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
      test: /\.vue$/,
      loader: 'vue-loader'
      // options: {
      //     loaders: {
      //         'scss': [
      //             'vue-style-loader',
      //             'css-loader',
      //             'sass-loader'
      //         ],
      //         'sass': [
      //             'vue-style-loader',
      //             'css-loader',
      //             'sass-loader?indentedSyntax'
      //         ]
      //     }
      // }
  },
  {
    test: /\.css$/,
    use: ['vue-style-loader', 'css-loader']
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
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'fonts/[name].[hash:7].[ext]'
      }
    }

  ]
},
optimization: {
  runtimeChunk: {
    name: "manifest"
  },
  splitChunks: {
    cacheGroups: {
      libs: {
        name: 'chunk-libs',
        test: /[\\/]node_modules[\\/]/,
        priority: 10,
        enforce: true,
        chunks: 'all'
      }
  }
},
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
    // new BundleAnalyzerPlugin(),
    new VueLoaderPlugin()
    // new HtmlWebpackPlugin({
    //   filename: "index.html",
    //   template: path.join(frontendPath,'index.html')})
  ]
}
Object.keys(frontend.entry).forEach(key => {
  const plugin = new HtmlWebpackPlugin({
    filename: key + '.html',
    template:  path.join(frontendPath,`${key}.html`),
    minify: {
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      removeComments: true
    },
    // inject: "head",
    chunks: ['manifest','chunk-libs', key],
    nodeModules: process.env.NODE_ENV !== 'production'
      ? path.resolve(__dirname, '../node_modules')
      : false
  })
  frontend.plugins.push(plugin)
})
module.exports = frontend

