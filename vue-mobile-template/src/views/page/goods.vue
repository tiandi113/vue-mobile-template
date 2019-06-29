<template>
  <div>
    <v-nav :title="title"></v-nav>goods
  </div>
</template>

<script>
import vnav from './nav.vue'
import Axios from 'axios'
export default {
  name: 'goods',
  data () {
    return {
      code: '',
      title: '商品'
    }
  },
  components: {
    'v-nav': vnav
  },
  mounted () {
    Axios.get('/getGoodsInfo').then(res => {
      this.title = res.data.title
    })
    this.code = this.$route.params.code
  }
}
</script>

<style lang="scss" scoped>
</style>
