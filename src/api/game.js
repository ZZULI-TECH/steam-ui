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
