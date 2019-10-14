const webpack = require('webpack')
var chalk = require('chalk')

var args = process.argv.splice(2)
console.log('args',args)
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
  }
}else{
const webpackBKConfig = require('./webpack.bk.config')
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
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
 })
}