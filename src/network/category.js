import { request } from './request'


export function get_Category() {
  return request({
    url: '/category'
  })
}

export function get_Subcategory(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}

export function get_Category_Detail(miniWallkey, type) {
  return request({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}