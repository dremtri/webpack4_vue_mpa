const CopyWebpackPlugin = require("copy-webpack-plugin")
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
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
      chunks: 'all',
      cacheGroups: {
        libs: {
          test: /[\\/]node_modules[\\/]/,
          name: "chunk-libs",
          priority: -10
        },
        elementUI: {
          test: /[\\/]node_modules[\\/]_?element-ui(.*)/,
          name: 'chunk-elementUI',
          priority: -5,
        },
        commons: {
          test: resolve('src/components'),
          name: 'chunk-commons',
          priority: -15,
          reuseExistingChunk: true
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
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          preset: ['default', { discardComments: { removeAll: true } }]
        }
      })
    ]
  },
  performance: {
    maxAssetSize: 1000000, // 单个文件超过1M警告
    maxEntrypointSize: 10000000 // 单个入口文件超过10M警告
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true, //开启在控制台输出信息
      dry: false,
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: resolve('public'), to: resolve(`${config.outputDir}/public`)} // 当public目录下没有东西时会报错
      ]
    }),
  ],
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
})