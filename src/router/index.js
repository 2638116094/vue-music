import Vue from 'vue'
import Router from 'vue-router'
// import Recommend from 'components/recommend/recommend'
// import Singer from 'components/singer/singer'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: () => import('@/components/recommend/recommend')
    }, {
      path: '/singer',
      component: () => import('@/components/singer/singer'),
      children: [
        {
          path: ':id',
          component: () => import('@/components/singer/singer-detail')
        }
      ]
    }, {
      path: '/rank',
      name: 'rank',
      component: () => import('@/components/rank/rank')
    }, {
      path: '/search',
      name: 'search',
      component: () => import('@/components/search/search')

    }, {
      path: '/home',
      component: () => import('components/home')
    }
  ]
})
