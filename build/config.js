module.exports = {
  entryDir: 'src/pages',
  outputDir: 'dist',
  publicPath: '',
  templatePath: 'index.html', // 模板文件位置
  cssPath: 'css', // 相对于outputDir-相对路径
  jsPath: 'js', // 相对于outputDir-相对路径
  dev: { 
    devtool: 'cheap-module-eval-source-map',
    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: false,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,
    // 404s will fallback to
    html404: '/home.html'
  },
  build: {
    productionSourceMap: false, // 是否开启devtool
    devtool: '#source-map',
  }
}