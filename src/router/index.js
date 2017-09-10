import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Login from '@/pages/Login'
import Post from '@/pages/Post'
import Detail from '@/pages/Detail'
import All from '@/components/All'
import Essence from '@/components/Essence'
import Share from '@/components/Share'
import Qa from '@/components/Qa'
import Recruit from '@/components/Recruit'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      redirect:'/all',
      name: 'home',
      component: Home,
      children:[
        {path:'/all',component:All},
        {path:'/essence',component:Essence},
        {path:'/share',component:Share},
        {path:'/qa',component:Qa},
        {path:'/recruit',component:Recruit}
        ]
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/post',
      name: 'post',
      component: Post
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ]
})
