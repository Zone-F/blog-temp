const jwt = require('jsonwebtoken'); // 用于签发、解析`token`
const jwtKoa = require('koa-jwt');      // 用于路由权限控制
const secret = '6araGo'
const check = {
  checkToken(app) {
    app.use(async (ctx, next) => {
      console.log('token验证', ctx);

  // jwt.verify(token, '6araGo', (err, decoded) => {
  //   if (err) {
  //     console.log(err);
  //     return false;
  //   }
  //   console.log(decoded);
  // })
  // let result ={
  //   state:404,
  //   token:jwt.sign({username:'吾妻咸恩静',password:'090729'}, '6araGo', { expiresIn: '4h' })
  // }
  //  return ctx.body = result;
    });
  }
}
module.exports = check;