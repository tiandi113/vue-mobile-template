// 首页
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
      <van-swipe class="swipe" :autoplay="3000" :initial-swipe="defaltSwipe">
        <van-swipe-item v-for="(image, index) in banner" :key="index" @click="_switchSwipe(index)">
          <van-image class="swipe-img" :src="image" />
        </van-swipe-item>
      </van-swipe>

      <div class="menu">
        <div class="menu-item">
          <img class="menu-item-img" src="@/assets/images/clothes.svg" />服装
        </div>
        <div class="menu-item">
          <img class="menu-item-img" src="@/assets/images/book.svg" />书籍
        </div>
        <div class="menu-item">
          <img class="menu-item-img" src="@/assets/images/tool.svg" />工具
        </div>
        <div class="menu-item">
          <img class="menu-item-img" src="@/assets/images/food.svg" />食品
        </div>
        <div class="menu-item">
          <img class="menu-item-img" src="@/assets/images/shop.svg" />更多商铺
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
      <van-list
        class="goodlist pd"
        :offset="offset"
        v-model="loading"
        finished-text="没有更多了"
        :finished="finished"
        @load="loadmore"
      >
        <template v-for="(good,index) in goods">
          <goods-card
            class="good"
            :url="good.img"
            :title="good.title"
            :price="good.price"
            :key="index"
          ></goods-card>
        </template>
      </van-list>
    </div>
  </div>
</template>

<script>
import { Dialog } from 'vant'
import goodscard from '../../components/goodCard'

export default {
  name: 'home',
  components: {
    'goods-card': goodscard
  },
  data () {
    return {
      offset: 100,
      active: 0,
      value: '',
      banner: [],
      defaltSwipe: 1,
      noticeswipe: [{ text: '茶颜悦色第二杯半价', type: 'goods', icon: 'fire-o', code: '123456' },
        { text: '国际商贸城二楼td服装店火热开张', type: 'shop', icon: 'fire-o', code: '123456' },
        { text: '国际商贸城二楼亏本大甩卖', type: 'shop', icon: 'fire-o', code: '123456' },
        { text: '国际商贸城大量商铺出售', type: 'shop', icon: 'volume-o', code: '123456' }
      ],
      goods: [],
      finished: false,
      loading: true
    }
  },
  mounted () {
    this.getBanner()
    this.loadmore()
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
    },
    getBanner () {
      this.$store.dispatch('home/getBanner').then((res) => {
        this.banner = res
      }).catch(() => {

      })
    },
    loadmore () {
      console.log(`loading = ${this.loading}, finished = ${this.finished}, now = ${Date.now()}`)
      this.$store.dispatch('home/getGoodsList', {}).then((res) => {
        if (res != null && res.length > 0) {
          this.goods = this.goods.concat(res)
        } else {
          this.finished = true
        }
        this.loading = false
      }).catch(() => {

      })
    }
  }
}
</script>

<style lang="scss" scoped>
.pd {
  padding: 0 10px;
}
.container {
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
  .search {
    width: 100%;
    position: fixed;
    margin-bottom: 54px;
    z-index: 999;
    border-bottom: 1px solid #eee;
    // background-color: black;
  }
  .content {
    position: relative;
    top: 54px;
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
      width: calc(100% - 20px);
      margin: 10px;
    }
    .goodlist {
      display: flex;
      flex-wrap: wrap;
      .good {
        flex: 0 0 49%;
        margin-top: 8px;
        &:nth-child(2n) {
          margin-left: 2%;
        }
      }
    }
  }
}
</style>
