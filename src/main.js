// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Element from 'element-ui'
import i18n from '@/lang'

import '../static/css/index.css' // 初始化基础样式
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element, {
    size: 'medium',
    i18n: (key, value) => i18n.t(key, value)
  })

import dayjs from 'dayjs' //全局引用dayjs
window.dayjs = dayjs;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
