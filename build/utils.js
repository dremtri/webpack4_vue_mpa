const path = require('path')
const glob = require('glob')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const config = require('./config')
const alias = require('./alias')
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
  let fileName = isProd ? `${config.jsPath ? config.jsPath + '/' : ''}[name].[hash].js` : `${config.jsPath ? config.jsPath + '/' : ''}[name].js`
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
      inject: true
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
  alias: getAlias(),
}

