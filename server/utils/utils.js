const jwt     = require('jsonwebtoken'); // 用于签发、解析`token`
const resMsg= (state,message,err)=>{
  let msg = {
    state,
    message,
  }
  if(err){
    msg['err'] = err
  }
  return msg
}
const checkToken = (ctx)=>{
  let pass = null;
  jwt.verify(ctx.request.body.token, '6araGo', (err, decoded) => {
    if (err) {
      ctx.body =  {
        state:501,
        msg:'token错误或过期'
      };
      pass = false;
    }
    pass = true;
  })
  return pass;
}
module.exports = {
  resMsg,
  checkToken
};