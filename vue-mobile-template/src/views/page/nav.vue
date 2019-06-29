// 导航条
<template>
  <div class="app">
    <van-nav-bar
      class="navbar"
      :title="title"
      :left-text="lefttext"
      left-arrow
      fixed
      :z-index="zindex"
      @click-left="onClickLeft"
    >
    <van-icon v-if="showRight" name="ellipsis" slot="right" />
    </van-nav-bar>
    <div class="">

    </div>
  </div>
</template>

<script>
export default {
  name: 'vnav',
  data () {
    return {
      zindex: 999,
      tool: false
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    lefttext: {
      type: String,
      default: ''
    },
    showRight: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      debugger
    }
  },
  mounted () {
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    onClickRight () {

    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #c62f2f;
  color: #fff !important;
  .van-nav-bar__text,.van-nav-bar__title,.van-icon {
    color: #fff;
  }
  .van-icon-arrow-left:before {
    color: #fff;
  }

}
</style>
