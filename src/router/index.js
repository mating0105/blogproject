import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/views/homepage/index'
import login from '@/views/login/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage
    },
    {
        path: '/login',
        name: 'login',
        component: login
      }
  ]
})
