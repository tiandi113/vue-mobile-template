const state = {
  tabbar: 0
}

// 改变state中的值
const mutations = {
  set_tabbar (state, value) {
    state.tabbar = value || localStorage.getItem('tabbar')
  }
}

// 异步请求
const actions = {
}

export default {
  state,
  mutations,
  actions
}
