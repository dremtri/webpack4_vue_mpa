const CopyWebpackPlugin = require("copy-webpack-plugin");
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const baseConf = require('./webpack.base.conf')
const config = require('./config')
const { resolve } = require('./utils')

module.exports = merge(baseConf, {
  mode: 'production',
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  // optimization: {
  //   splitChunks: {
  //     chunks: 'async',
  //     minSize: 30000,
  //     maxSize: 0,
  //     minChunks: 1,
  //     maxAsyncRequests: 5,
  //     maxInitialRequests: 3,
  //     automaticNameDelimiter: '~',
  //     name: true,
  //     cacheGroups: {
  //       vendors: {
  //         test: /[\\/]node_modules[\\/]/,
  //         priority: -10
  //       },
  //       default: {
  //         minChunks: 2,
  //         priority: -20,
  //         reuseExistingChunk: true
  //       }
  //     }
  //   }
  // }
  optimization:{
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    // minimizer: [
    //   new UglifyJsPlugin({
    //     uglifyOptions: {
    //       compress: {
    //         warnings: false,
    //         drop_debugger: false,
    //         drop_console: true
    //       }
    //     }
    //   }),
    //   new OptimizeCSSAssetsPlugin({
    //     cssProcessorOptions: {
    //       safe: true
    //     }
    //   })
    // ]
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true, //开启在控制台输出信息
      dry: false,
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: resolve('public'), to: resolve(config.outputDir)} // 当public目录下没有东西时会报错
      ]
    }),
  ]
})