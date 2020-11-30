const path = require('path')
const glob = require('glob')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const config = require('./config')
const alias = require('./alias')
const pageConfig = require('../config/pageConfig')
const resolve = (p) => path.resolve(__dirname, "..", p)

const isProd = process.env.NODE_ENV === 'production'

function getFileName(filePath) {
  // 文件名生成规则:  获取config.entryDir的直接子目录
  filePath = filePath.replace(config.entryDir, '')
  let fileName = filePath.split(path.posix.sep + '')
  return fileName[0] || fileName[1]
}

// 获取别名
function getAlias() {
  let map = {}
  Object.keys(alias).forEach(key => {
    const val = alias[key]
    map[key] = resolve(val)
  })
  return map
}

// 获取webpack入口
function getEntries() {
  const entryFiles = glob.sync(`${config.entryDir}/**/main.js`)
  let map = {}
  entryFiles.forEach((filePath) => {
    let filename = getFileName(filePath)
    map[filename] = resolve(filePath)
  })
  return map
}

// 获取webpack出口
function getOutput() {
  const jsPath = config.jsPath ? config.jsPath + '/' : ''
  let fileName = isProd ? `${jsPath}[name].[hash].js` : `${jsPath}[name].js`
  return {
    path: resolve(config.outputDir),
    publicPath: config.publicPath,
    filename: fileName
  }
}

// 获取webpack HtmlWebpackPlugin数据
function getHtmlPlugins() {
  const entryHtml = glob.sync(`${config.entryDir}/**/main.js`)
  let arr = []
  entryHtml.forEach((filePath) => {
    let filename = getFileName(filePath)
    let conf = {
      template: resolve(config.templatePath), // 模板来源
      filename: filename + '.html', // 文件名称
      chunks: [filename], // 页面模板需要加对应的js脚本，如果不加这行则每个页面都会引入所有的js脚本
      inject: true,
      templateParameters: pageConfig[filename],
      meta: {
        viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
        author: 'Dremtri',
        description: 'webpack4 + vue 多页面',
        keywords: 'webpack4 + vue 多页面',
        charset: {
          charset: 'UTF-8'
        },
        'http-equiv': {
          'http-equiv': 'X-UA-Compatible',
          content: 'IE=edge'
        }
      }
    }
    arr.push(new HtmlWebpackPlugin(conf))
  })
  return arr
}

module.exports = {
  resolve,
  isProd,
  entry: getEntries(),
  output: getOutput(),
  htmlPlugins: getHtmlPlugins(),
  alias: getAlias()
}

