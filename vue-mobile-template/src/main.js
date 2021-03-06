import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import Vant from 'vant'
import 'vant/lib/index.css'
// import './main.css'
import './assets/icon/iconfont.css'

require('../mock/mock')

Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
