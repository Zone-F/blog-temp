const Cookies = require('js-cookie')
const isClient = process.client;
export default function ({ store, redirect }) {
  if (!Cookies.get('token')) {
    console.log('token',Cookies.get('token'));
    return redirect('/login')
  }
  // if (isClient) {
  //   console.log('登录验证');
  //   if (!Cookies.get('token')) {
  //     console.log('token',Cookies.get('token'));
  //     return redirect('/login')
  //   }
  // }
}