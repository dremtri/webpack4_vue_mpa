const CopyWebpackPlugin = require("copy-webpack-plugin")
const TerserPlugin = require('terser-webpack-plugin')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const baseConf = require('./webpack.base.conf')
const config = require('./config')
const { resolve } = require('./utils')

module.exports = merge(baseConf, {
  mode: 'production',
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
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
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: config.build.productionSourceMap, // Must be set to true if using source-maps in production
        terserOptions: {
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
          compress: {
            // https://github.com/terser/terser#compress-options
            drop_debugger: true,
            drop_console: true
          }
        }
      }),
      // new OptimizeCSSAssetsPlugin({
      //   cssProcessorOptions: {
      //     safe: true
      //   }
      // })
    ]
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