import request from '@/utils/request'

export function getGameById(id) {
  return request({
    url: `/api/game/${id}`,
    method: 'GET'
  })
}

export function addComment(comment) {
  return request({
    url: '/api/game-comment',
    method: 'POST',
    data: comment
  })
}

export function checkLib(gameId, userId) {
  return request({
    url: `/api/game-library/check/${gameId}/${userId}`,
    method: 'GET'
  })
}
