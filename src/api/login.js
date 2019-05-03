import request from '@/utils/request'

export function login(query) {
  return request({
    url: '/api/account/login',
    method: 'post',
    data: query
  })
}

export function userList(query) {
  return request({
    url: '/api/user/list',
    method: 'GET',
    params: query
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function getInfo(token) {
  return request({
    url: '/api/user/getInfo',
    method: 'get',
    params: { token }
  })
}
