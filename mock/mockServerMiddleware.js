
/**
 * 定义一个 node 中间件 用于响应访问mock数据
 */
module.exports = (app) => {
  app.get('/mock/list', (req, res) => {
    res.json({data: {a: 'b', test: 'maomao'}})
  })
}