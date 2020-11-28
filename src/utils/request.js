import axios from 'axios'

const service = axios.create({
  baseUrl: '',
  timeout: 5000
})

service.interceptors.request.use(config => {
  // do something before request is sent
  return config
}, error => {
  // do something with request error
  return Promise.reject(error)
})

service.interceptors.response.use(res => {
  const { code, msg, data } = res
  if(code === 200) {
    return Promise.resolve(data)
  }
  // do something with business response error
  return Promise.reject(new Error(res.message || 'Error'))
}, error => {
  // do something with response error
  return Promise.reject(error)
})

export default service