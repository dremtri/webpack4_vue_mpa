const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const VueLoaderPlugin = require("vue-loader/lib/plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const config = require('./config')
const { entry, output, alias, htmlPlugins, resolve, isProd } = require('./utils')
const { rules } = require('./module')

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [ resolve('src') ],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

module.exports = {
  entry: entry,
  output: output,
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias
  },
  module: {
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      ...rules
    ]
  },
  plugins: [
    new VueLoaderPlugin(), // 当没有一个.vue文件会报错.
    new MiniCssExtractPlugin({
      filename: isProd ? '[name].[contenthash].css' : '[name].css',
      chunkFilename: isProd ? '[id].[contenthash].css' : '[id].css',
    }),
  ].concat(...htmlPlugins)
}