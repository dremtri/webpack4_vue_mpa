const VueLoaderPlugin = require("vue-loader/lib/plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const config = require('./config')
const { entry, output, alias, htmlPlugins, resolve, isProd } = require('./utils')
const { rules } = require('./module')

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  exclude: /node_modules/,
  include: [ resolve('src') ],
  options: {
    formatter: require('eslint-friendly-formatter')
  }
})

function getBaseConf() {
  const cssPath = config.cssPath ? config.cssPath + '/' : ''
  return {
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
        filename: isProd ? `${cssPath}[name].[contenthash].css` : `${cssPath}/[name].css`,
        chunkFilename: isProd ? `${cssPath}[id].[contenthash].css` : `${cssPath}/[id].css`
      }),
    ].concat(...htmlPlugins)
  }
}

module.exports = getBaseConf()