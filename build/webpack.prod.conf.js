const { plugins } = require("./webpack.base.conf");
module.exports = {
  mode: 'production',
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
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
}