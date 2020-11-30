const Mock = require('mockjs')
const count = 100

function getList() {
  let list = []
  for(let i = 0; i < count; i++) {
    const obj = Mock.mock({
      id: '@increment',
      author: '@cname',
      createTime: Mock.Random.datetime('yyyy-MM-dd HH:mm:ss')
    })
    list.push(obj)
  }
  return list
}

module.exports = {
  getList
}