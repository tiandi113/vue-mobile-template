
import Mock from 'mockjs'

// 自动加载./中的js文件并加载到动态路由中
// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./', true, /\.js$/)
let modulesRouters = []

modulesFiles.keys().forEach(key => {
  if (key === './mock.js') return
  modulesRouters = modulesRouters.concat(modulesFiles(key).default) // 读取出文件中的default模块
})

function mockserver (obj) {
  obj.forEach(item => {
    Mock.mock(item.url, item.method || 'get', item.response)
  })
}

mockserver(modulesRouters)
