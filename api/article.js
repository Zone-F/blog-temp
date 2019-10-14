import {
  request
} from '../plugins/request'

/**
 * 获取文章列表
 */
export function getArticleList(data) {
  let url = `/article/list`
  return request(url, data, 'post')
}
/**
 * 修改文章
 */
export function putArticle(data) {
  let url = `/article`
  return request(url, data, 'put')
}
/**
 * 删除文章
 */
export function delArticle(data) {
  let url = `/article`
  return request(url, data, 'del')
}
/**
 * 新建文章
 */
export function newArticle(data) {
  let url = `/article`
  return request(url, data, 'post')
}
/**
 * 获取文章详情
 */
export function getArticle(data) {
  let url = `/article/detail`
  return request(url, data, 'post')
}
