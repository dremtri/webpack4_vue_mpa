const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const config = require('./config')
const { isProd, resolve } = require('./utils.js')

// 获取规则对应loader
function getRules() {
  return [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.vue$/,
      exclude: /node_modules/,
      use: "vue-loader"
    },
    {
      test: /\.css$/,
      use: [
        (isProd ? MiniCssExtractPlugin.loader : 'vue-style-loader'),
        'css-loader',
        'postcss-loader'
      ]
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [
        (isProd ? MiniCssExtractPlugin.loader : 'vue-style-loader'),
        'css-loader',
        'postcss-loader',
        'scss-loader'
      ]
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: isProd ? '[name].[hash].[ext]' : '[name].[ext]',
          outputPath: resolve(`${config.outputDir}/assets/imgs/`)
        }
      }]
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
          name:  isProd ? '[name].[hash].[ext]' : '[name].[ext]',
          outputPath: resolve(`${config.outputDir}assets/fonts/`)
        }
      }]
    }
  ]
}

module.exports = {
  rules: getRules()
}