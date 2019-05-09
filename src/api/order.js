import request from '@/utils/request'

export function addOrderFromCar(userId) {
  return request({
    url: `/api/order/createOrderFromCart/${userId}`,
    method: 'POST'
  })
}
