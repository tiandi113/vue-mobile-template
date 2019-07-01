<template>
  <div class="imgCard" @click="_click">
    <van-image class="img" :src="url">
      <template v-slot:error>
        <img src="@/assets/images/unloadimg.svg" />
      </template>
    </van-image>
    <div class="title" :scrollable="false">{{title}}</div>
    <div class="price" v-if="price>0">￥{{price}}</div>
  </div>
</template>

<script>
export default {
  name: 'goodCard',
  props: {
    title: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: '@/assets/images/unloadimg.svg'
    },
    span: {
      type: Number,
      default: 12
    },
    price: {
      type: Number,
      default: null
    }
  },
  mounted () {
  },
  methods: {
    _click () {

    }
  }
}
</script>

<style lang="scss" scoped>
.imgCard {
  width: 100%;
  box-shadow: 0 0 4px rgb(218, 218, 218);
  .img {
    width: 100%;
    min-height: 75px;
  }
  .title {
    color: rgba(100, 100, 100, 0.9);
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .price {
    color: rgba(#f00, 0.6);
  }
}
</style>
