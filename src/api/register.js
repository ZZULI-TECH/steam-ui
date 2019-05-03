import request from '@/utils/request'

export function getSecCode(email) {
  return request({
    url: '/api/account/getSeccode',
    method: 'GET',
    params: { email }
  })
}

export function register(query) {
  return request({
    url: '/api/account/register',
    method: 'POST',
    data: query
  })
}
