<template>
  <div class="container">
    <form action="/">
      <van-search
        class="search"
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        shape="round"
        @search="onSearch"
      >
        <div slot="action" @click="onSearch">搜索</div>
      </van-search>
    </form>
    <div class="content">
      <div class="siderbar">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item
            :title="category.name"
            v-for="(category,index) in categoryList"
            :key="category.id"
            @click="_switch(index)"
          />
        </van-sidebar>
      </div>
      <div class="list" id="list">
        <van-image v-if="list.ad!=''" class="list-ad" :src="list.ad" />
        <van-panel
          v-for="(item,index) in list.list"
          class="list-panel"
          :title="item.title"
          :key="index"
        >
          <van-grid :border="false" :column-num="3">
            <van-grid-item v-for="(cell,index2) in item.arr" :key="index2">
              <van-image :src="cell.image" />
              <span class="van-grid-item__text">{{cell.name}}</span>
            </van-grid-item>
          </van-grid>
        </van-panel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Category',
  data () {
    return {
      value: '',
      activeKey: 0,
      categoryList: [],
      list: {}
    }
  },
  methods: {
    _switch (index) {
      this.activeKey = index
    },
    onSearch () {

    }
  },
  watch: {
    'activeKey' (newValue, oldValue) {
      // 切换时将后侧置顶
      document.getElementById('list').scrollTop = 0
    }
  },
  beforeMount () {
    this.$store.dispatch('category/getCategory').then(res => {
      this.categoryList = res
    })
    this.$store.dispatch('category/getListByCategory', this.categoryList[this.activeKey]).then(res => {
      this.list = res
    })
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: calc(100vh - 54px);
  padding-bottom: 50px;
  overflow-y: scroll;
  .search {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 999;
    margin-bottom: 54px;
  }
  .content {
    height: calc(100% - 54px);
    margin-top: 54px;
    display: flex;
    .siderbar {
      flex: 0 0 25%;
      height: 100%;
      overflow-y: scroll;
    }
    .list {
      flex: 0 0 75%;
      height: 100%;
      overflow-y: scroll;
      &-ad {
        width: 98%;
        height: 100px;
        margin: 4px auto;
      }
      .list-panel {
        width: 100%;
        &-image {
          width: 30%;
          height: 80px;
        }
      }
    }
  }
}
</style>
