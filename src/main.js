// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import './assets/css/reset.css'
import 'github-markdown-css' //markdown css  要在v-html加载的最顶层加类名markdown-body

import Vue from 'vue'
import App from './App'
import router from './router'
// import store from './vuex/store'
// import 'lib-flexible'
import * as filters from './util/filter'
Object.keys(filters).forEach(k => Vue.filter(k, filters[k])) //注册过滤器
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  template: '<App/>',
  components: { App }
})
