<template>
  <div class="container">
    <v-nav title="编辑地址"></v-nav>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import vnav from '../nav.vue'
import arealist from '../../../assets/area'
export default {
  components: {
    'v-nav': vnav
  },
  data () {
    return {
      areaList: arealist,
      searchResult: []
    }
  },
  mounted () {
    debugger
    console.log(this.$route.params)
  },
  methods: {
    onSave () {

    },
    onDelete () {

    },
    onChangeDetail (val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }]
      } else {
        this.searchResult = []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 50px;
}
</style>
