<template>
  <div class="container">
    <form action="/">
      <van-search
        class="search-border"
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        shape="round"
        @search="onSearch"
      >
        <div slot="action" @click="onSearch">搜索</div>
      </van-search>
    </form>
    <van-sidebar v-model="activeKey">
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
    </van-sidebar>
  </div>
</template>

<script>
export default {
  name: 'Category',
  data () {
    return {
      value: '',
      activeKey: 0
    }
  },
  methods: {
    onSearch () {

    }
  }
}
</script>

<style lang="scss" scoped>
</style>
