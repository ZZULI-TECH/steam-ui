import request from '@/utils/request'

export function orderList(userId, pageNum, pageSize, orderStatus) {
  return request({
    url: `/api/order/orderList/${userId}/${pageNum}/${pageSize}/${orderStatus}`,
    method: 'GET'
  })
}
export function addOrderFromCar(userId) {
  return request({
    url: `/api/order/createOrderFromCart/${userId}`,
    method: 'POST'
  })
}

export function update(row) {
  return request({
    url: '/api/order/update',
    method: 'post',
    data: row
  })
}
