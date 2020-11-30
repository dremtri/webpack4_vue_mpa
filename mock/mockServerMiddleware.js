const { getList } = require('./data/list')
/**
 * 定义一个 node 中间件 用于响应访问mock数据
 */
module.exports = (app) => {
  app.get('/mock/list', (req, res) => {
    res.json({
      code: 200,
      data: getList(),
      msg: '请求成功'
    })
  })
}