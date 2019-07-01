import axios from 'axios'
// axios配置信息
axios.defaults.withCredentials = true
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 前缀url
  timeout: 5000 // 请求超时
})
// 数据发送前的拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    Promise.reject(error)
  }
)
// 数据接受时的拦截器
service.interceptors.response.use((response) => {
  return response
}, (err) => {
  switch (err.response.status) {
    case 500:

      break
    case 429:

      break
    default:
  }
})

export default service
