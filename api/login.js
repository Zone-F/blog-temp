import {
  request
} from '../plugins/request'

/**
 * 登录
 */
function doLogin(data) {
  let url = `/login`
  return request(url, data, 'post')
}
export{
  doLogin
}