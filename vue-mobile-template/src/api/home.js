import request from '@/util/request'

export function getgoodsList (data) {
  return request({
    url: '/getgoodsList',
    method: 'post',
    data
  })
}

export function getBanner (params) {
  return request({
    url: '/getBanner',
    method: 'get',
    params
  })
}

// category 分类页面
export function getCategory () {
  return request({
    url: '/getCategory',
    method: 'get'
  })
}

export function getListByCategory () {
  return request({
    url: '/getListByCategory',
    method: 'post'
  })
}
