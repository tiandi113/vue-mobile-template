// 首页
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
    <van-swipe class="swipe" :autoplay="3000" :initial-swipe="defaltSwipe">
      <van-swipe-item v-for="(image, index) in images" :key="index" @click="_switchSwipe(index)">
        <img class="swipe-img" :src="image">
      </van-swipe-item>
    </van-swipe>

    <div class="menu">
      <div class="menu-item">
        <img class="menu-item-img" src="@/assets/images/clothes.svg">服装
      </div>
      <div class="menu-item">
        <img class="menu-item-img" src="@/assets/images/book.svg">书籍
      </div>
      <div class="menu-item">
        <img class="menu-item-img" src="@/assets/images/tool.svg">工具
      </div>
      <div class="menu-item">
        <img class="menu-item-img" src="@/assets/images/food.svg">食品
      </div>
      <div class="menu-item">
        <img class="menu-item-img" src="@/assets/images/shop.svg">更多商铺
      </div>
    </div>
    <van-swipe class="notice" :autoplay="3000" vertical indicator-color="#FFFBE8">
      <van-swipe-item v-for="(item, index) in noticeswipe" :key="index" @click="toDetail(item)">
        <van-notice-bar
          :scrollable="false"
          :left-icon="item.icon"
          background="#FFFBE8"
        >{{item.text}}</van-notice-bar>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Dialog } from 'vant'
import axios from 'axios'
export default {
  name: 'home',
  components: {
  },
  data () {
    return {
      active: 0,
      value: '',
      images: [],
      defaltSwipe: 1,
      noticeswipe: [{ text: '茶颜悦色第二杯半价', type: 'goods', icon: 'fire-o', code: '123456' },
        { text: '国际商贸城二楼td服装店火热开张', type: 'shop', icon: 'fire-o', code: '123456' },
        { text: '国际商贸城二楼亏本大甩卖', type: 'shop', icon: 'fire-o', code: '123456' },
        { text: '国际商贸城大量商铺出售', type: 'shop', icon: 'volume-o', code: '123456' }
      ]
    }
  },
  mounted () {
    axios.get('/getBanner').then(res => {
      this.images = res.data
    })
  },
  methods: {
    onSearch () {
      Dialog.alert({
        title: 'search',
        message: this.value
      }).then(() => {
        // on close
      })
    },
    _switchSwipe (e) {
      Dialog.alert({
        title: 'swipe',
        message: e
      })
    },
    toDetail (obj) {
      this.$router.push({ name: 'goods', params: { code: obj.code } })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  .search-border {
    border-bottom: 1px solid #eee;
    background-color: black;
  }
  .swipe {
    height: 175px;
    width: 100%;
    &-img {
      width: 100%;
      height: 100%;
    }
  }
  .menu {
    display: flex;
    margin-top: 10px;
    text-align: center;
    color: rgba(#000000, 0.7);
    font-size: 12px;
    &-item {
      flex: 1 1 auto;
      padding: auto;
      &-img {
        width: 32px;
        height: 32px;
        margin: auto;
        display: block;
        border-radius: 50%;
      }
    }
  }
  .notice {
    height: 40px;
    width: 100%;
    margin-top: 10px;
  }
}
</style>
