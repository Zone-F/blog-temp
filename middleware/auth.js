const Cookies = require('js-cookie')
const isClient = process.client;
export default function ({ store, redirect }) {
  if (isClient) {
    if (!Cookies.get('token')) {
      console.log('token',Cookies.get('token'));
      return redirect('/login')
    }
  }
}