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
  jwt.verify(ctx.request.body.token, '6araGo', (err, decoded) => {
    if (err) {
      console.log('token错误',err);
      ctx.body =  {
        state:501,
        msg:'token错误或过期'
      };
      return false;
    }
    console.log('通过验证',decoded);
    return true;
  })
}
module.exports = {
  resMsg,
  checkToken
};