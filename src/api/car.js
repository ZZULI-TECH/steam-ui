import request from '@/utils/request'

export function listCar(userId) {
  return request({
    url: `/api/cart/cartList/${userId}`,
    method: 'GET'
  })
}

export function carRemove(id, userId) {
  return request({
    url: `/api/cart/removeFromCart/${id}/${userId}`,
    method: 'DELETE'
  })
}

export function addCar(userId, query) {
  return request({
    url: `/api/cart/addToCart/${userId}`,
    method: 'POST',
    data: query
  })
}

export function checkCar(userId, gameId) {
  return request({
    url: `/api/cart/checkCar/${userId}/${gameId}`,
    method: 'GET'
  })
}
