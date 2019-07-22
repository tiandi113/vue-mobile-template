<template>
  <div class="container">
    <v-nav title="设置"></v-nav>
    <van-cell title="我的信息" value="" is-link to="/" />
    <van-cell title="我的地址" value="管理地址" is-link :to="{ name:'address',params:{addressinfo:{}}}" />
    <van-cell title="帐号安全" value="密码修改" is-link to="/" />
    <van-cell title="退出登录" is-link to="/" />
  </div>
</template>

<script>
import vnav from './nav.vue'
export default {
  name: 'setting',
  components: {
    'v-nav': vnav
  }
}
</script>

<style lang="scss" scoped>
  .container{
    margin-top:50px;
  }
</style>
