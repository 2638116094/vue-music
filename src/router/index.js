import Vue from 'vue'
import Router from 'vue-router'
// import Recommend from 'components/recommend/recommend'
// import Singer from 'components/singer/singer'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/tab'
    },
    {
      path: '/tab',
      component: () => import('@/components/tab/tab'),
      children: [
        {
          path: '/',
          redirect: '/tab/recommend'
        },
        {
          path: '/tab/recommend',
          name: 'recommend',
          component: () => import('@/components/recommend/recommend')
        }, {
          path: '/tab/singer',
          name: 'singer',
          component: () => import('@/components/singer/singer')
        }, {
          path: '/tab/rank',
          name: 'rank',
          component: () => import('@/components/rank/rank')
        }, {
          path: '/tab/search',
          name: 'search',
          component: () => import('@/components/search/search')
        }
      ]
    }, {
      path: '/home',
      component: () => import('components/home')
    }
  ]
})
