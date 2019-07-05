<template>
  <div class="container">
    <div class="bg">
      <div class="content">
        <span>购物车</span>
        <span style="float:right">{{toolName}}</span>

        <!-- <div class="goodslist"> -->
        <div class="shop" v-for="(shop,index) in goodsList" :key="index">
          <div class="shop-name">
            <van-checkbox
              class="shop-check"
              :checked-color="checkboxcolor"
              v-model="shop.checked"
            >{{ shop.shopName }}</van-checkbox>
            <span class="shop-btn">进店</span>
          </div>
          <div class="shop-goods" v-for="(good,index1) in shop.goods" :key="index1">
            <van-checkbox
              class="shop-goods-check"
              :checked-color="checkboxcolor"
              v-model="good.checked"
            ></van-checkbox>
            <van-card
              class="shop-goods-card"
              :num="good.num"
              :price="good.price"
              :origin-price="good.originprice"
              :desc="good.desc"
              :title="good.title"
              :thumb="good.thumb"
              thumb-link="/"
            >
              <!-- <div slot="tags">
                  <van-tag plain type="danger">标签</van-tag>
                  <van-tag plain type="danger">标签</van-tag>
              </div>-->
              <div slot="footer">
                <van-stepper v-model="good.num" />
              </div>
            </van-card>
          </div>
        </div>
        <div class="nothing" v-if="goodsList.length==0">
            购物车为空
        </div>
        <!-- </div> -->
        <van-submit-bar :price="allprice" button-text="提交订单" @submit="onSubmit">
          <van-checkbox v-model="checkAll" :checked-color="checkboxcolor">全选</van-checkbox>
          <span slot="tip">
            你的收货地址不支持同城送,
            <span>修改地址</span>
          </span>
        </van-submit-bar>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
  data () {
    return {
      checkboxcolor: '#c02b2b',
      toolName: '编辑',
      goodsList: [
        {
          shopId: '1',
          shopName: 'td专卖td专卖td',
          checked: false,
          goods: [{
            title: '商品标题',
            desc: '描述信息描述信息描',
            price: 90.01,
            originprice: 180,
            num: 2,
            checked: false,
            thumb: 'https://img.yzcdn.cn/vant/t-thirt.jpg'
          }, {
            title: '商品标题',
            desc: '描述信息描述信息描',
            price: 90.01,
            originprice: 180,
            num: 2,
            checked: false,
            thumb: 'https://img.yzcdn.cn/vant/t-thirt.jpg'
          }]
        }, {
          shopId: '1',
          shopName: 'T恤专卖店',
          checked: false,
          goods: [{
            title: '商品标题',
            desc: '描述信息描述信息描',
            price: 90.01,
            originprice: 180,
            num: 2,
            checked: false,
            thumb: 'https://img.yzcdn.cn/vant/t-thirt.jpg'
          }, {
            title: '商品标题',
            desc: '描述信息描述信息描',
            price: 90.01,
            originprice: 180,
            num: 2,
            checked: false,
            thumb: 'https://img.yzcdn.cn/vant/t-thirt.jpg'
          }]
        }
      ],
      checkAll: false
    }
  },
  watch: {
    'goodsList' (newValue, oldValue) {

    }
  },
  computed: {
    allprice () {
      return 1000
    }
  },
  methods: {
    onSubmit () {

    }
  }
}
</script>

<style lang="scss" scoped>
.van-submit-bar {
  bottom: 50px;
}
.container {
  width: 100%;
  height: calc(100vh - 150px);
  // margin-bottom: 150px;
  overflow-y: scroll;
  .bg {
    height: 200px;
    width: 100%;
    background: linear-gradient(right, #c02b2b, #aa6363);
    .content {
      width: 90%;
      margin: 0 20px auto;
      color: #fff;
      .shop {
        color: #000;
        background-color: #fafafa;
        padding: 10px;
        margin: 20px auto;
        font-size: 13px;
        border: 1px solid #cfcfcf;
        box-shadow: 0 8px 12px #ebedf0;
        border-radius: 20px;
        overflow: hidden;
        &-name {
          width: 100%;
          height: 20px;
          border-bottom: #aaa;
          display: flex;
          .shop-check {
            flex: 0 0 90%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            .van-checkbox__label {
              width: 80%;
            }
          }
          .shop-btn {
            flex: 0 0 10%;
            text-align: right;
            padding-right: 4px;
            color: rgba(0, 0, 0, 0.6);
          }
        }
        &-goods {
          margin-top: 10px;
          width: 100%;
          display: flex;
          box-shadow: 0 8px 12px #ebedf0;
          &:last-child {
            border: none;
          }
          &-check {
            flex: 0 0 10%;
          }
          &-card {
            flex: 0 0 90%;
          }
        }
      }
      .nothing{
        text-align: center;
        font-size: 20px;
        color:rgb(134, 134, 134);
      }
    }
  }
}
</style>
