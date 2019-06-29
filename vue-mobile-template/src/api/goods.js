import request from '@/utils/request'

export function getGoodInfo () {
  return request({
    url: '/getGoodInfo',
    method: 'GET'
  })
}
