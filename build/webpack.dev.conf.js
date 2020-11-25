const path = require('path')
const { merge } = require('webpack-merge');
const baseConf = require('./webpack.base.conf')
const config = require('./config')
const { resolve } = require('./utils')
module.exports = merge(baseConf, {
  mode: 'development',
  devServer: {
    contentBase: resolve(config.outputDir),
    host: '0.0.0.0',
    port: '9999',
    useLocalIp: true,
    overlay:{
      errors: true,
      warnings: true
    },
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: config.dev.html404 },
      ],
      index: config.dev.html404 // 404s will fallback to
    },
    open: true,
    stats:{
      assets: false,
      chunks: false,
      chunkGroups: false,
      chunkModules: false,
      chunkOrigins: false,
      modules: false,
      moduleTrace: false,
      source: false,
      builtAt: false,
      children: false,
      hash:false,
    },
  }
})