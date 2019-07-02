<template>
  <div>
    <v-nav title="设置"></v-nav>
    <van-cell title="单元格" is-link to="index" />
    <van-cell title="单元格" is-link to="index" />
    <van-cell title="单元格" is-link to="index" />
    <van-cell title="单元格" is-link to="index" />
    <van-cell title="单元格" is-link to="index" />
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
</style>
