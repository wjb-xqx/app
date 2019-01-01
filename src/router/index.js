import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
// 设置
import setInfo from '@/components/setInfo'
import home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/setInfo',
      name: 'setInfo',
      component: setInfo
    },
    {
      path: '/home',
      name: 'home',
      component: home
    }
  ]
})
