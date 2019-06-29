
export default [
  {
    url: '/getBanner',
    method: 'get',
    response: [
      'https://portalfile.hone.cn/SysBanner/SB-201906051625561316.png',
      'https://img.yzcdn.cn/2.jpg'
    ]
  },
  {
    url: '/getUser',
    response: {
      code: 200,
      data: { id: 1, name: 'tiandi' }
    }
  }]
