/**
 * 此配置用于项目全局功能性配置
 */
const { isProd } = require('../build/utils')
module.exports = {
  APP_BASE_API: isProd ? 'prod-api' : '/dev-api'
}