import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'



Vue.use(Router)

const router = new Router({
    routes:[
        {path:'/login',name:'login',component:Login}
    ]
})


export default router