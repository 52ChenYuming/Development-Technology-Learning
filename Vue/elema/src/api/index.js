import { get } from './request'

const getSeller = get('api/seller')
const getGoods = get('api/goods')

export {
  getSeller,
  getGoods
}