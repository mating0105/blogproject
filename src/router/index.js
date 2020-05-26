import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/views/homepage/index'
import login from '@/views/login/index'
import directive from '@/views/directive/index'
import problemT from '@/views/problemAnalysis/index'

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
    },
    {
      path: '/directive',
      name: 'directive',
      component: directive
    },
    {
      path: '/problemAnalysis',
      name: 'problemAnalysis',
      component: problemT
    }
  ]
})
