import axios from 'axios'
import Vue from 'vue'
import router from './router'

const http = axios.create({
    baseURL:'http://a.hnggjkw.com/web'
})

http.interceptors.response.use(res => {
   // console.log(res.data)
    Vue.prototype.$message({
        type: 'success',
        message: res.data.msg
      })
    return res
  }, err => {
    if (err.response.data.msg) {
       // console.log(err.response.data.message)
      Vue.prototype.$message({
        type: 'error',
        message: err.response.data.msg
      })
      
      if (err.response.status === 401) {
        router.push('/login')
      }
    }
    
    return Promise.reject(err)
  })


export default http