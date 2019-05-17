import request from '@/utils/request'

export function orderList(userId, pageNum, pageSize, orderStatus) {
  return request({
    url: `/api/order/orderList/${userId}/${pageNum}/${pageSize}/${orderStatus}`,
    method: 'GET'
  })
}
// TODO orderList
