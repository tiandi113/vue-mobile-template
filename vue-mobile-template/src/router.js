import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: index,
      children: [
        {
          path: '',
          name: 'home',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('./views/index/Home.vue')
        },
        {
          path: '/My',
          name: 'my',
          component: () => import('./views/index/My.vue')
        },
        {
          path: '/Category',
          name: 'category',
          component: () => import('./views/index/Category.vue')
        },
        {
          path: '/ShoppingCart',
          name: 'shoppingCart',
          component: () => import('./views/index/ShoppingCart.vue')
        }
      ]
    },
    {
      path: '/goods/:code',
      name: 'goods',
      component: () => import('./views/page/goods.vue')
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import('./views/page/setting.vue')
    }
  ]
})
