import { request } from './request'

// 请求轮播图和推荐内容
export function get_Home_Multidata() {
  return request({
    url: '/home/multidata'
  })
}

// 请求商品列表
export function get_Home_Goods(type, page) {
  return request({
    url: 'home/data',
    params: {
      type,
      page
    }
  })
}