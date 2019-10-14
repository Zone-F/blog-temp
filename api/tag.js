import {
  request
} from '../plugins/request'

/**
 * 获取标签列表
 */
export function getTagList(data) {
  let url = `/tag/list`
  return request(url, data, 'post')
}
/**
 * 修改标签
 */
export function putTag(data) {
  let url = `/tag`
  return request(url, data, 'put')
}
/**
 * 删除标签
 */
export function delTag(data) {
  let url = `/tag`
  return request(url, data, 'del')
}
/**
 * 新建标签
 */
export function newTag(data) {
  let url = `/tag`
  return request(url, data, 'post')
}