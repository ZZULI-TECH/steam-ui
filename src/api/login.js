import request from '@/utils/request'

export function login(query) {
  return request({
    // url: '/api/tokens/Login',
    // method: 'post',
    // data: query
    url: '/api/tokens/test',
    method: 'get',
    params: query
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
