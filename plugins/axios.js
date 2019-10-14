import * as axios from 'axios'

let options ={}

//需要全路径才能工作

if(process.server){

　　options.baseURL=`http://127.0.0.1:6000`

}

export default axios.create(options)