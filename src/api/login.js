import request from '@/utils/request';
import url from '@/config/basicApi';
const api = url.api;
// 登录 
export function loginIn(data) {
  return request({
    url: `${api}/users/login`,
    method: 'POST',
    data
  })
}

