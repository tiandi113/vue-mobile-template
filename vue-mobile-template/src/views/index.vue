<template>
  <div class="app">
    <van-tabbar v-model="active" :activeColor="activeColor" :safe-area-inset-bottom='true'>
      <template v-for="(item,index) in tabBar">
        <router-link
          class="van-tabbar-item"
          :to="{name: item.route}"
          :style="active===index?'color:'+activeColor:''"
          :key="index"
        >
          <van-tabbar-item :icon="item.icon" :info="item.num">{{item.name}}</van-tabbar-item>
        </router-link>
      </template>
    </van-tabbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'tabbar',
  data () {
    return {
      tabBar: [{ route: 'home', icon: 'home-o', name: '首页', num: '' },
        { route: 'category', icon: 'bars', name: '分类', num: '' },
        { route: 'category', icon: 'fire', name: '批发', num: '' },
        { route: 'shoppingCart', icon: 'shopping-cart', name: '购物车', num: '' },
        { route: 'my', icon: 'manager', name: '我的', num: '' }],
      active: 0,
      activeColor: 'red',
      shoppingCartNum: '',
      myNum: ''
    }
  },
  mounted () {
    this.active = this.$store.state.activeTabBar
  },
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
    },
    'active' (value) {
      this.$store.commit('set_tabbar', value)
      if (typeof (value) !== 'undefined') {
        localStorage.setItem('tabbar', value)
      } else {
        this.active = parseInt(localStorage.getItem('tabbar'))
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
