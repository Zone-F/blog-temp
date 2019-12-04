const Router = require('koa-router');
const router = new Router();
const bodyParser = require('koa-bodyparser')
const Article = require('./article')
const articleController = new Article();
const Tag = require('./tag')
const TagController = new Tag();
const Login = require('./login')
const LoginController = new Login()
module.exports = (app) => {
  app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    await next();
  });
  app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (ctx.method == 'OPTIONS') {
      ctx.body = 200;
    } else {
      await next();
    }
  });
  app.use(bodyParser())
  router
    // 文章相关
    .post('/article', articleController.newArticle())
    .post('/article/detail', articleController.getArticle())
    .put('/article', articleController.putArticle())
    .del('/article', articleController.delArticle())
    .post('/article/list', articleController.getList())
    .post('/article/tag', articleController.getListByTag())
    //标签相关
    .post('/tag/list', TagController.tagList())
    .post('/tag', TagController.newTag())
    .put('/tag', TagController.putTag())
    .del('/tag', TagController.delTag())
    //登录
    .post('/login', LoginController.login())
    .post('/tokentest', async (ctx, next) => {
      if (checkToken(ctx.request.body.token)) {
        return;
      }
    })
  app.use(router.routes())
    .use(router.allowedMethods());
}