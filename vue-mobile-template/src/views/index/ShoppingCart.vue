<template>
  <div>
    <van-grid :border="false" :column-num="3">
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
        <span class="van-grid-item__text">文字</span>
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
        <span class="van-grid-item__text">文字</span>
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
        <span class="van-grid-item__text">文字</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart'
}
</script>

<style lang="scss" scoped>
</style>
