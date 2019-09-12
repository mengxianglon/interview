import axios from 'axios'
import Vue from 'vue'
import router from './router'

const http = axios.create({
    baseURL:'http://a.hnggjkw.com/web'
})

//让ajax携带cookie
// axios.defaults.withCredentials=true;

//请求头
http.interceptors.request.use(function (config) {
    // Do something before request is sent
    if (localStorage.token) {
      config.headers.token = localStorage.token
      config.headers.username = localStorage.username
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });


//响应头
http.interceptors.response.use(res => {
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
    return Promise.reject()
  })


export default http