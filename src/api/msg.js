import request from '@/utils/request'

export function addMsg(msg) {
  return request({
    // TODO 用户留言后台接口
    url: '/api/msg/add',
    method: 'post',
    data: msg
  })
}
