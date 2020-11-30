import MAxios from './mAxios/index'
const service = new MAxios({}, {
  baseURL: process.env.APP_BASE_API,
  timeout: 5000
})

export default service