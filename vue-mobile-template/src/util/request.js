import axios from 'axios'
import { Toast, Dialog } from 'vant'

var instance = axios.create({
  baseURL: 'http://localhost',
  withCredentials: true,
  timeout: 10000
})
debugger

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  debugger
  // config.headers['X-Token'] //增加Token
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  const res = response.data
  if (res.code !== 200) {
    Dialog.alert({ message: res.message })
    return Promise.reject(new Error(res.message || 'Error'))
  } else {
    return res
  }
}, function (error) {
  // 对响应错误做点什么
  Toast.fail(error)
  return Promise.reject(error)
})

export default instance
