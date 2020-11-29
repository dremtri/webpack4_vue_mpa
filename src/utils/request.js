import MAxios from './mAxios/index'

const service = new MAxios({}, {
  baseUrl: '',
  timeout: 5000
})

export default service