import { request } from './request'

// 请求商品详情数据
export function get_Detail_Data(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

// 请求评论信息
export function get_Recommend() {
  return request({
    url: '/recommend'
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.realPrice = itemInfo.lowNowPrice
    this.columns = columns
    this.services = services
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
  }
}