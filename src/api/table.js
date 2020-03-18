import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/goods/queryPage',
    method: 'post',
    params
  })
}

export function getGoodsList(data) {
  return request({
    url: '/goods/queryPage',
    method: 'post',
    data: data
  })
}
