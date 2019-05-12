import request from '@/utils/request'

export function getGames(query) {
  return request({
    url: '/api/game/list',
    method: 'get',
    params: query
  })
}

export function searchGames(query) {
  return request({
    url: '/api/game/search',
    method: 'get',
    params: query
  })
}
