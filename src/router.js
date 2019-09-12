import Vue from 'vue'
import Router from 'vue-router'

import Login from './views/Login.vue'
import Main from './views/Main.vue'
import Search from './views/InterviewSearch.vue'

import InterviewEdit from './views/InterviewEdit.vue'
import InterviewList from './views/InterviewList.vue'



Vue.use(Router)

const router = new Router({
    routes:[
        {path:'/login',name:'login',component:Login ,meta: { isPublic: true }},
        {path:'/register',name:'register',component:Login,meta: { isPublic: true }},
        {
          path:'/',
          name:'main',
          component:Main,
          children:[
              {path:'/interviews/create',component:InterviewEdit},
              {path:'/interviews/:tid/edit',component:InterviewEdit,props:true},
              {path:'/interviews/list',component:InterviewList},
              {path:'/interviews/InterviewSearch',name:'search',component:Search},
          ]
        },
    ]
})

router.beforeEach((to, from ,next) => {
    if (!to.meta.isPublic && !localStorage.token) {
      return next('/login')
    }
    next()
  })
export default router