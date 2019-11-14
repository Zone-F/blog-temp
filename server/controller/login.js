const jwt     = require('jsonwebtoken'); // 用于签发、解析`token`
const checkToken = require('../utils/utils').checkToken
const userModel = require('../db/schema/user')
const mongoose = require("mongoose")
const resMsg = require("../utils/utils").resMsg

class LoginController {
  constructor() {}
  /**
   * @api {post} /login 登录
   * @apiName newArticle
   * @apiGroup Login
   *
   * @apiParam {String} username 用户名.
   * @apiParam {String} password 密码.
   * @apiSuccess {Object} token String
   */
  login(ctx, next) {
    return async (ctx, body) => {
      let username = ctx.request.body.username,
        password = ctx.request.body.password;
      try {
        let res = await userModel.findOne({
          username
        });        
        if (!res) {
          throw {
            message: '用户名不存在'
          }
        };
        if(res.password !=password){
          throw {
            message: '密码错误'
          }
        }
        ctx.body = {
          state:200,
          msg:'登录成功',
          token:jwt.sign({username,password}, '6araGo', { expiresIn: '10h' })
        }
      } catch (err) {
        ctx.body = resMsg(500, '登录失败', err.message)
      }
    }
  }
  // /**
  //  * @api {post} /article/detail 获取文章
  //  * @apiName getArticle
  //  * @apiGroup Article
  //  *
  //  * @apiParam {String} id 文章_id.
  //  * @apiSuccess {Object} data [{_id:'',title:'',body:'',updateTime:'',createTime:''}].
  //  * @apiSuccess {Object} tags [{_id:'',tid:[{name:'',tid:''}]}]
  //  */
  // checkToken(ctx, next) {
  //   return async (ctx, body) => {
  //     const article = new Article();
  //     const result = await article.getArticle(ctx.request.body);
  //     ctx.body = result;
  //   }
  // }
}
module.exports = LoginController;