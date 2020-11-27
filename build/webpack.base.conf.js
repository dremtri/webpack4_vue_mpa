const VueLoaderPlugin = require("vue-loader/lib/plugin")
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
    // 将 CSS 提取到单独的文件中
    new MiniCssExtractPlugin({
      filename: isProd ? `${config.cssPath ? config.cssPath + '/' : ''}[name].[contenthash].css` : `${config.cssPath ? config.cssPath + '/' : ''}/[name].css`,
      chunkFilename: isProd ? `${config.cssPath ? config.cssPath + '/' : ''}[id].[contenthash].css` : `${config.cssPath ? config.cssPath + '/' : ''}/[id].css`
    }),
  ].concat(...htmlPlugins)
}