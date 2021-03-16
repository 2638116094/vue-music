import Vue from 'vue'
import Router from 'vue-router'
// import Recommend from 'components/recommend/recommend'
// import Singer from 'components/singer/singer'
// import Dis from 'components/disc/disc'
import TopList from 'components/top-list/top-list'
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
      component: () => import('@/components/rank/rank'),
      children: [
        { 
          path: ':id',
          component: () => import('@/components/top-list/top-list')
        }
      ]
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
