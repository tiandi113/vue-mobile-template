import request from '@/utils/request'

export function getBanner () {
  return request({
    url: '/getBanner',
    method: 'GET'
  })
}
