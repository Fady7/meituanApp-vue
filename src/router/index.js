import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/layout/Default'
import Blank from '@/layout/Blank'
import MainIndex from '@/components/page/Index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'default',
    component: Default,
    redirect: '/index',
    children: [{
      path: '/index',
      name: 'index',
      component: MainIndex
    }, {
      path: '/changeCity',
      name: 'changeCity',
      component: () => import('@/components/page/ChangeCity')
    }, {
      path: 's/:name',
      name: 'goods',
      component: _ => import('@/components/page/goodsList')
    }]
  }, {
    path: '/blank',
    name: 'blank',
    component: Blank,
    children: [{
      path: '/register',
      name: 'register',
      component: _ => import('@/logs/register')
    },{
      path: '/login',
      name: 'login',
      component: _ => import('@/logs/login')
    }]
  }]
})
