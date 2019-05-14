import request from '@/utils/request'

export function getUserInfo(userId) {
  return request({
    url: `/api/user/${userId}`,
    method: 'GET'
  })
}

export function checkPwd(userId, password, email) {
  return request({
    url: '/api/user/checkPwd',
    method: 'GET',
    params: { userId, password, email }
  })
}

export function updateUser(user) {
  return request({
    url: '/api/user/update',
    method: 'PUT',
    data: user
  })
}
