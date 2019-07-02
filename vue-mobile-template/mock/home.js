
export default [
  {
    url: '/getgoodsList',
    method: 'post',
    response: [{
      id: '1',
      img: 'https://portalfile.hone.cn/SysBanner/SB-201906051625561316.png',
      title: '车载使用，超便捷',
      price: 120
    }, {
      id: '2',
      img: 'https://img.yzcdn.cn/2.jpg',
      title: '车载使用，超便捷',
      price: 98
    }, {
      id: '3',
      img: 'https://img.yzcdn.cn/2.jpg',
      title: '车载使用，超便捷',
      price: 120
    }, {
      id: '4',
      img: 'https://portalfile.hone.cn/SysBanner/SB-201906051625561316.png',
      title: '车载使用，超便捷',
      price: 85
    }, {
      id: '4',
      img: 'https://portalfile.hone.cn/SysBanner/SB-201906051625561316.png',
      title: '车载使用，超便捷',
      price: 85
    }, {
      id: '1',
      img: 'https://portalfile.hone.cn/SysBanner/SB-201906051625561316.png',
      title: '车载使用，超便捷',
      price: 120
    }, {
      id: '2',
      img: 'https://img.yzcdn.cn/2.jpg',
      title: '车载使用，超便捷',
      price: 98
    }, {
      id: '3',
      img: 'https://img.yzcdn.cn/2.jpg',
      title: '车载使用，超便捷',
      price: 120
    }, {
      id: '4',
      img: 'https://portalfile.hone.cn/SysBanner/SB-201906051625561316.png',
      title: '车载使用，超便捷',
      price: 85
    }, {
      id: '4',
      img: 'https://portalfile.hone.cn/SysBanner/SB-201906051625561316.png',
      title: '车载使用，超便捷',
      price: 85
    }
    ]
  },
  {
    url: '/getBanner',
    method: 'get',
    response: ['https://portalfile.hone.cn/SysBanner/SB-201906051625561316.png', 'https://img.yzcdn.cn/2.jpg']
  },
  {
    url: '/getCategory',
    method: 'get',
    response: [{ id: 1, name: '男装' }, { id: 2, name: '女装' }, { id: 3, name: '男鞋' },
      { id: 4, name: '女鞋' }, { id: 5, name: '箱包手袋' }, { id: 6, name: '电脑办公' },
      { id: 7, name: '家用电器' }, { id: 8, name: '食品生鲜' }, { id: 9, name: '运动户外' },
      { id: 10, name: '汽车生活' }, { id: 11, name: '家具厨具' }, { id: 12, name: '家具家装' }, { id: 13, name: '玩具乐器' }, { id: 14, name: '医药保健' },
      { id: 15, name: '图书文娱' }, { id: 16, name: '生活旅行' }, { id: 17, name: '工业品' }]
  },
  {
    url: '/getListByCategory',
    method: 'post',
    response: {
      ad: 'https://img.yzcdn.cn/vant/apple-1.jpg',
      url: '',
      list: [{
        title: '服饰',
        arr: [
          {
            id: 1,
            name: 'T恤',
            image: 'https://img.yzcdn.cn/vant/apple-1.jpg'
          },
          {
            id: 2,
            name: '短裤',
            image: 'https://img.yzcdn.cn/vant/apple-2.jpg'
          },
          {
            id: 3,
            name: '西装',
            image: 'https://img.yzcdn.cn/vant/apple-3.jpg'
          },
          {
            id: 4,
            name: '七分裤',
            image: 'https://img.yzcdn.cn/vant/apple-2.jpg'
          }
        ]
      }, {
        title: '电子产品',
        arr: [
          {
            id: 1,
            name: 'iphone',
            image: 'https://img.yzcdn.cn/vant/apple-1.jpg'
          },
          {
            id: 2,
            name: 'mac',
            image: 'https://img.yzcdn.cn/vant/apple-2.jpg'
          },
          {
            id: 3,
            name: 'ipad',
            image: 'https://img.yzcdn.cn/vant/apple-3.jpg'
          },
          {
            id: 4,
            name: '七分裤',
            image: 'https://img.yzcdn.cn/vant/apple-2.jpg'
          }
        ]
      }
      ]
    }
  }
]
