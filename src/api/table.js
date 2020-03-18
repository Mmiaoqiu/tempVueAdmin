import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/goods/queryPage',
    method: 'post',
    params
  })
}
