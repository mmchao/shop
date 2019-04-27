// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App.vue'
import store from './store'
import './bootstrap/css/bootstrap.min.css'
// 已经安装了jquery包
import './bootstrap/js/bootstrap.min.js'

import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.config.productionTip = false

Vue.filter('money',function(value){
  return value.toFixed(2)+"元";
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

