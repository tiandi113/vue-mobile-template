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
