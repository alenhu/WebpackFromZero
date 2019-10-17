
const path = require('path')
const webpack = require('webpack')
var chalk = require('chalk')

var args = process.argv.splice(2)
const frontdist =  path.resolve(__dirname, 'app')
console.log('args',args)


function logStats (proc, data) {
  let log = ''

  log += chalk.yellow.bold(`┏ ${proc} Process ${new Array((19 - proc.length) + 1).join('-')}`)
  log += '\n\n'

  if (typeof data === 'object') {
    data.toString({
      colors: true,
      chunks: false
    }).split(/\r?\n/).forEach(line => {
      log += '  ' + line + '\n'
    })
  } else {
    log += `  ${data}\n`
  }

  log += '\n' + chalk.yellow.bold(`┗ ${new Array(28 + 1).join('-')}`) + '\n'

  console.log(log)
}
if(args && args.length){
  if(args[0] === "dev"){
    const webpackBKConfig = require('./webpack.bk.dev.config')
    webpack(webpackBKConfig,  (err, stats) => {
      if (err) throw err
      process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + '\n\n')
  
      if (stats.hasErrors()) {
        console.log(chalk.red('  dev failed with errors.\n'))
        process.exit(1)
      }
  
      console.log(chalk.cyan('  dev complete.\n'))
   })
  }else if (args[0] === 'fdev'){
    const WebpackDevServer = require('webpack-dev-server')
    const webpackHotMiddleware = require('webpack-hot-middleware')
    const webpackBKConfig = require('./webpack.fk.dev.config')
    const compiler = webpack(webpackBKConfig)
  //   const compiler = webpack(webpackBKConfig,  (err, stats) => {
  //     if (err) throw err
  //     process.stdout.write(stats.toString({
  //       colors: true,
  //       modules: false,
  //       children: false,
  //       chunks: false,
  //       chunkModules: false
  //     }) + '\n\n')
  
  //     if (stats.hasErrors()) {
  //       console.log(chalk.red('  fdev failed with errors.\n'))
  //       process.exit(1)
  //     }
  
  //     console.log(chalk.cyan('  fdev complete.\n'))
  //  })
   hotMiddleware = webpackHotMiddleware(compiler, {
    log: false,
    heartbeat: 2500
  })
  compiler.hooks.compilation.tap('compilation', compilation => {
    compilation.hooks.htmlWebpackPluginAfterEmit.tapAsync('html-webpack-plugin-after-emit', (data, cb) => {
      hotMiddleware.publish({ action: 'reload' })
      cb()
    })
  })
  compiler.hooks.done.tap('done', stats => {
    logStats('Renderer', stats)
  })
  const server = new WebpackDevServer(
    compiler,
    {
      contentBase: frontdist,
      quiet: true,
      before (app, ctx) {
        app.use(hotMiddleware)
        ctx.middleware.waitUntilValid(() => {
          // resolve()
        })
      }
    }
  )

  server.listen(9080)
  }
}else{
    // const webpackBKConfig = require('./webpack.bk.config')
    // webpack(webpackBKConfig,  (err, stats) => {
    //     if (err) throw err
    //     process.stdout.write(stats.toString({
    //       colors: true,
    //       modules: false,
    //       children: false,
    //       chunks: false,
    //       chunkModules: false
    //     }) + '\n\n')

    //     if (stats.hasErrors()) {
    //       console.log(chalk.red('  Build failed with errors.\n'))
    //       process.exit(1)
    //     }

    //     console.log(chalk.cyan('  Build complete.\n'))
    // })
    const webpackFKConfig = require('./webpack.fk.config')
    webpack(webpackFKConfig,  (err, stats) => {
      if (err) throw err
      process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + '\n\n')

      if (stats.hasErrors()) {
        console.log(chalk.red('  Front Build failed with errors.\n'))
        process.exit(1)
      }

      console.log(chalk.cyan('  Front Build complete.\n'))
    })
}