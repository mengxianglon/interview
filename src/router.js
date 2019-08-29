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
        {path:'/login',name:'login',component:Login},
        {
          path:'/',
          name:'main',
          component:Main,
          children:[
              {path:'/interviews/create',component:InterviewEdit},
              {path:'/interviews/edit/:id',component:InterviewEdit,props:true},
              {path:'/interviews/list',component:InterviewList},
              {path:'/interviews/InterviewSearch',name:'search',component:InterviewEdit},
          ]
        },
    ]
})


export default router