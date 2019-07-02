// 个人中心
<template>
  <div class="container">
    <div class="pure_top">
      <div class="headicon">
        <img class="headicon-icon" src="@/assets/head.png" />
      </div>
      <div class="info">
        <span class="info-name">田迪</span>
        <span class="info-phone">电话：17347100886</span>
        <van-icon size="22" name="setting-o" class="info-set" @click="_setting()" />
      </div>
    </div>
    <div class="menu">
      <div class="menu-card">
        <van-cell title="我的订单" is-link value="查看订单" />
        <van-tabbar v-model="active" active-color="#000" inactive-color="#000" :fixed="false">
          <template v-for="(item,index) in orderTool">
            <van-tabbar-item :icon="item.icon" :key="index" :nfo='item.info'>{{item.name}}</van-tabbar-item>
          </template>
        </van-tabbar>
      </div>

      <van-tabbar
        class="menu-2"
        v-model="active"
        active-color="#000"
        inactive-color="#000"
        :border="false"
        :fixed="false"
      >
        <van-tabbar-item class="tabbar-item">
          <div class="menu-2-tag">{{couponNum}}</div>卡券
        </van-tabbar-item>
        <van-tabbar-item class="tabbar-item">
          <div class="menu-2-tag">{{collectGoodsNum}}</div>收藏
        </van-tabbar-item>
        <van-tabbar-item class="tabbar-item">
          <div class="menu-2-tag">{{collectShopNum}}</div>店铺
        </van-tabbar-item>
        <van-tabbar-item class="tabbar-item">
          <div class="menu-2-tag">{{historyNum}}</div>足迹
        </van-tabbar-item>
      </van-tabbar>
    </div>
    <van-cell-group class="group" :border='true'>
    <van-cell title="我的地址"   is-link value="收货地址" to='/setting'/>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'My',
  data () {
    return {
      orderTool: [{ icon: 'peer-pay', name: '待付款', info: '' }, { icon: 'logistics', name: '待发货', info: '' },
        { icon: 'logistics', name: '待收货', info: '' }, { icon: 'chat-o', name: '待评价', info: '' },
        { icon: 'orders-o', name: '我的订单', info: '' }
      ],
      active: 0,
      couponNum: 0,
      collectGoodsNum: 0,
      collectShopNum: 0,
      historyNum: 0
    }
  },
  methods: {
    _setting () {
      this.$router.push({ name: 'setting' })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: calc(100vh - 54px);
  padding-bottom: 50px;
  overflow-y: scroll;
  .pure_top {
    width: 100%;
    height: 130px;
    position: relative;
    // z-index: -1;
    overflow: hidden;
    display: flex;
    &:after {
      content: "";
      width: 140%;
      height: 130px;
      position: absolute;
      left: -20%;
      top: 0;
      z-index: -1;
      border-radius: 0 0 50% 50%;
      background: #c62f2f;
    }
    .headicon {
      flex: 0 0 70px;
      margin: auto 20px;
      &-icon {
        height: 60px;
        width: 60px;
        border-radius: 50%;
        overflow: hidden;
      }
    }
    .info {
      flex: 0 0 calc(100% - 100px);
      color: #fff;
      &-name {
        margin: 35px auto auto 0;
        font-size: 18px;
        display: block;
      }
      &-phone {
        font-size: 16px;
        display: block;
      }
      &-set {
        position: absolute;
        right: 20px;
        top: 20px;
      }
    }
  }
  .menu {
    margin-top: 20px;
    &-card {
      width: 94%;
      margin: 0 auto;
      border: 1px solid #ccc;
      border-radius: 4px;
      overflow: hidden;
    }
    &-2 {
      width: 94%;
      margin: 0 auto;
      margin-top: 20px;
      .tabbar-item {
        color: #c62f2f;
        font-size: 16px;
        text-align: center;
        .menu-2-tag {
          color: #c62f2f;
          height: 24px;
          line-height: 24px;
        }
      }
    }
  }
  .group{
    margin-top: 40px;
  }
}
</style>
