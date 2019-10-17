import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/home/index.vue'

import Login from './views/login/index.vue'
Vue.use(Router)

const router = new Router({
  routes: [
    // 一级路由配置
    {
      path: '/',
      component: Home
      // 二级路由配置
      // children: [{
      //   path:''
      // }]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
export default router
