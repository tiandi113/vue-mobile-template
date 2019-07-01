import { getgoodsList, getBanner } from '@/api/home'

const state = {
  name: '',
  avatar: '',
  roles: []
}

// 改变state中的值
const mutations = {

}

// 异步请求
const actions = {
  getGoodsList ({ commit }, pagemodel) {
    // const { page, pagesize } = pagemodel
    return new Promise((resolve, reject) => {
      getgoodsList(pagemodel).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getBanner ({ commit }, params) {
    // const { page, pagesize } = pagemodel
    return new Promise((resolve, reject) => {
      getBanner(params).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
