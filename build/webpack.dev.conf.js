const webpack = require("webpack");
const { merge } = require('webpack-merge');
const baseConf = require('./webpack.base.conf')
const config = require('./config')
const { resolve } = require('./utils')
const globalConfig = require('../config/globalConfig')
const mockServer = require('../mock/mockServerMiddleware')
module.exports = merge(baseConf, {
  mode: 'development',
  devtool: config.dev.devtool,
  devServer: {
    contentBase: resolve(config.outputDir),
    host: '0.0.0.0',
    port: '9999',
    proxy: {
      [globalConfig.APP_BASE_API]: {
        target: `http://0.0.0.0:9999/mock`,
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: {
          ['^' + globalConfig.APP_BASE_API]: ''
        }
      }
    },
    after: (app) => {
      if(process.env.NODE_ENV === 'mock') {
        mockServer(app)
      }
    },
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