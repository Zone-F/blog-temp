import axios from 'axios'
// import qs from 'qs'


axios.defaults.timeout = 10000
axios.defaults.responseType = 'json'
axios.defaults.baseURL = 'http://127.0.0.1:3000'

/**
 * 请求拦截器
 */
axios.interceptors.request.use(
  config => {    
    return config
  },
  error => {
    // console.log('错误信息',error)
    return Promise.reject(error)
  }
)
/**
 * 响应拦截器
 */
axios.interceptors.response.use(
  res => {
    // if (res.data && Number(res.data.code) === 401) {
    //   removeToken()
    //   Globe_VM.$router.push({
    //     path: '/login'
    //   })
    // }
    if (res.data) {
      return Promise.reject(res.data)
    }
    // return res
  },
  error => {
    return error
  }
)

export function request(url, data, method, headers) {
  return new Promise((resolve, reject) => {
    let date = {
      url: url,
      method: method,
      data:{}
    }
    // if (getToken()) {
    //   date.headers = {
    //     token: getToken()
    //   }
    // }
    if (data !== '' && method === 'get') {
      // date.url += '?' + qs.stringify(data)
    }
    if (data !== '' && method === 'post') {
      date.data = data
    }
    if (data !== '' && method === 'delete') {
      date.data = data
    }
    if (data !== '' && method === 'put') {
      date.data = data
    }    
    axios(date).then(res => {
      reject(res.data)
    }).catch(error => {
      resolve(error)
    })
  })
}