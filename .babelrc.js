module.exports = {
  presets: [
    '@babel/preset-env', // 官网提供的一组方法集
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-transform-runtime' // https://www.babeljs.cn/docs/babel-plugin-transform-runtime
  ]
}