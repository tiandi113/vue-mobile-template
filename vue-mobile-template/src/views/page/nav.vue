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
      @click-right="onClickRight"
    >
      <van-icon v-if="showRight" name="ellipsis" slot="right" />
    </van-nav-bar>
    <div class="tool" v-show="showTool">
      <van-cell icon="home-o" title="首页" clickable to="/" />
    </div>
    <!-- <van-popup :overlay='false'  class="tool" v-model="showTool" position="right" :style="{ height: '20%' }" >
      <van-cell icon="home-o" title="首页" clickable to="/" />
    </van-popup> -->
  </div>
</template>

<script>
export default {
  name: 'vnav',
  data () {
    return {
      zindex: 999,
      tool: false,
      showTool: false
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
      default: false
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
      this.showTool = !this.showTool
      console.log(event)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #c62f2f;
  color: #fff !important;
  .van-nav-bar__text,
  .van-nav-bar__title,
  .van-icon {
    color: #fff;
  }
  .van-icon-arrow-left:before {
    color: #fff;
  }
}
.tool {
  width: 80px;
  position: fixed;
  top: 46px;
  right: 0;
  z-index: 999;
  .van-cell {
    background-color: #eee;
  }
}
</style>
