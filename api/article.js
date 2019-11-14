import {
  request
} from '../plugins/request'

/**
 * 获取文章列表
 */
function getArticleList(data) {
  let url = `/article/list`
  return request(url, data, 'post')
}
/**
 * 修改文章
 */
function putArticle(data) {
  return request('/article', data, 'put')
}
/**
 * 删除文章
 */
function delArticle(data) {
  return request('/article', data, 'del')
}
/**
 * 新建文章
 */
function newArticle(data) {
  return request('/article', data, 'post')
}
/**
 * 获取文章详情
 */
function getArticle(data) {
  let url = `/article/detail`
  return request(url, data, 'post')
}
/**
 * 获取文章列表
 */
function getListByTag(data) {
  let url = `/article/tag`
  return request(url, data, 'post')
}
export{
  getArticleList,
  putArticle,
  delArticle,
  newArticle,
  getArticle,
  getListByTag
}
