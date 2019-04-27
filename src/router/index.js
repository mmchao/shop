import Vue from 'vue'
import Router from 'vue-router'
// import Shop from '../components/Shop.vue'
// import Check from '../components/Check.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'shop',
      component: () => import(/* webpackChunkName: "shop" */ '../components/Shop.vue')
      // component: Shop
    },
    {
      path: '/check',
      name: 'check',
      component: () => import(/* webpackChunkName: "check" */ '../components/Check.vue') // 懒加载
      // component: Check
    },
    {
      path: '/adress',
      name: 'adress',
      component: () => import(/* webpackChunkName: "adress" */ '../components/Adress.vue') // 懒加载
      // component: Check
    }
    // {
    //   path: '*', redirect: '/shop'
    // }
  ]
})

