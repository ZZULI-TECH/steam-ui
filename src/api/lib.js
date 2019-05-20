import request from '@/utils/request'

export function libList(userId, pageNum, pageSize) {
  return request({
    url: `/api/game-library/list/${userId}/${pageNum}/${pageSize}`,
    method: 'GET'
  })
}

export function getOrderGame(uid, gameId) {
  return request({
    url: '/api/game-library/getOreder',
    method: 'GET',
    params: { uid, gameId }
  })
}
