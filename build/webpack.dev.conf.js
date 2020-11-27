const webpack = require("webpack");
const { merge } = require('webpack-merge');
const baseConf = require('./webpack.base.conf')
const config = require('./config')
const { resolve } = require('./utils')
module.exports = merge(baseConf, {
  mode: 'development',
  devtool: config.dev.devtool,
  devServer: {
    contentBase: resolve(config.outputDir),
    host: '0.0.0.0',
    port: '9999',
    useLocalIp: true,
    overlay:{
      errors: true,
      warnings: false
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
      modules: false,
      moduleTrace: true,
      source: false,
      builtAt: false,
      children: false,
      hash: false,
      colors: true,
      warnings: true,
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})