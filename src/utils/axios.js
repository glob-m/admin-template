// axios配置文件
import axios from 'axios'
import store from '@/store'

const baseUrlHash = {
  production: store.state.product_http,
  development: '/api'
}
const BASE_URL = baseUrlHash[process.env.NODE_ENV]
axios.defaults.baseURL = BASE_URL

axios.defaults.timeout = 6000

// http request 拦截器
axios.interceptors.request.use(
  config => {
    config.headers['api-token'] = store.state.token || undefined
    return Promise.resolve(config)
  },
  error => {
    return Promise.reject(error)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  res => {
    return Promise.resolve(res)
  },
  err => {
    return Promise.reject(err.response)
  }
)

// 封装get方法
export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
// 封装post请求
export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}
// 封装patch请求
export function patch (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}
// 封装put请求
export function put (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}
// 封装delete请求
export function del (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.delete(url, {
      params: params
    })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
