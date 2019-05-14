import request from '@/utils/request'

export function libList(userId, pageNum, pageSize) {
  return request({
    url: `/api/game-library/list/${userId}/${pageNum}/${pageSize}`,
    method: 'GET'
  })
}
