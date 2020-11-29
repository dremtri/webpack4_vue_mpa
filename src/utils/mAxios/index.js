import { merge } from 'lodash'
import axios from 'axios'

export default class MAxios {
  constructor(option = {}, config = {}) {
    this.initOption(option)
    this.initConfig(config)
    this.createAxios()  // 创建axios实例
    this.initInterceptors() // 初始化拦截器
  }
  initOption(option) {
    this.option = merge({}, {
      // 基本配置
    }, option)
  }
  initConfig(config) {
    this.config = merge({}, {
      timeout: 20000,
      responseType: 'json',
      headers: {
        'content-type': 'application/json',
      },
    }, config)
  }
  createAxios() {
    this.axios = axios.create(this.config)
  }
  initInterceptors() {
    this.initRequestInterceptor()
    this.initResponseInterceptor()
  }
  initRequestInterceptor() {
    this.axios.interceptors.request.use(config => {
      // do something before request is sent
      return config
    }, error => {
      // do something with request error
      return Promise.reject(error)
    })
  }
  initResponseInterceptor() {
    this.axios.interceptors.response.use(res => {
      const { code, msg, data } = res
      if(code === 200) {
        return Promise.resolve(data)
      }
      // do something with business response error
      return Promise.reject(new Error(msg || 'Error'))
    }, error => {
      // do something with response error
      return Promise.reject(error)
    })
  }
  /**
   *
   * @param {String} type   [request type]
   * @param {String} path   [request url path]
   * @param {Object} param  [request params]
   */
  fetch(type, path, param = {}, config = {}) {
    return new Promise((resolve, reject) => {
      this.axios[type](path, param, config)
        .then((response) => resolve(response))
        .catch((err) => reject(err))
    })
  }
  /**
   *
   * @param {String} path   [request url path]
   * @param {Object} param  [request params]
   * @param {Object} config
   */
  get(path, param = {}, config = {}) {
    return this.fetch('get', path, { params: param, ...config })
  }
  /**
   *
   * @param {String} path   [request url path]
   * @param {Object} param  [request params]
   * @param {Object} config
   */
  post(path, param = {}, config = {}) {
    return this.fetch('post', path, param, config)
  }
  /**
   *
   * @param {String} path   [request url path]
   * @param {Object} param  [request params]
   * @param {Object} config
   */
  put(path, param = {}, config = {}) {
    return this.fetch('put', path, param, config)
  }
  /**
   *
   * @param {String} path   [request url path]
   * @param {Object} param  [request params]
   * @param {Object} config 
   */
  delete(path, param = {}, config = {}) {
    return this.fetch('delete', path, param, config)
  }
  /**
   * 上传表单方法
   * @param {*} path
   * @param {*} params
   * @param {Object} config 
   */
  formData(path, params, config = {}) {
    const formData = new FormData()
    Object.keys(params).forEach((key) => {
      formData.append(key, params[key])
    })

    const defaultFormDataConfig = {
      method: 'post',
      data: formData,
      headers: {
        'content-type': 'multipart/form-datacharset=UTF-8',
      },
    }
    return new Promise((resolve, reject) => {
      this.axios(path, merge(defaultFormDataConfig, config)).then((res) => resolve(res))
        .catch((err) => reject(err))
    })
  }
  /**
   * 如果你存在post请求时的参数为url参数, 或者get请求时参数为body参数时请使用此方法
   * config = {
   *  data: {}, // body 参数
   *  params: {}, url参数
   *  method: 'get', 请求方法
   * }
   */
  _request (config = {}) {
    return this.axios(config)
  }
}