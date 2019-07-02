import { getCategory, getListByCategory } from '@/api/home'

const state = {

}

// 改变state中的值
const mutations = {

}

// 异步请求
const actions = {
  getCategory ({ commit }) {
    return new Promise((resolve, reject) => {
      getCategory().then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getListByCategory ({ commit }, category) {
    return new Promise((resolve, reject) => {
      getListByCategory(category).then(res => {
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
