module.exports = {
  entryDir: 'src/pages',
  outputDir: 'dist',
  publicPath: '',
  templatePath: 'index.html', // 模板文件位置
  cssPath: 'css', // outputDir 目录下
  jsPath: 'js', // outputDir 目录下
  dev: { 
    devtool: 'cheap-module-eval-source-map',
    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // 404s will fallback to
    html404: '/home.html'
  },
  build: {
    productionSourceMap: false, // 是否开启devtool
    devtool: '#source-map',
  }
}