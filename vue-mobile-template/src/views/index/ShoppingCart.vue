<template>
  <div class="container">
    <div class="bg">
      <div class="content">
        <span>购物车</span>
        <span style="float:right">购物车</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart'
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: calc(100vh - 54px);
  padding-bottom: 50px;
  overflow-y: scroll;
  .bg {
    height: 200px;
    width: 100%;
    background: linear-gradient(right, #c02b2b, #aa6363);
    position: absolute;
    top: 0;
    .content{
      width: 90%;
      margin: 10px auto;
    }
  }
}
</style>
