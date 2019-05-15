// 路由
import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/views/layout/index'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'dashboard',
    children: [{
      path: '/dashboard',
      component: () => import('@/views/dashboard/index')
    },
    {
      path: '/login',
      component: () => import('@/views/login')
    },
    {
      path: '/register',
      component: () => import('@/views/register')
    },
    {
      path: '/detail',
      component: () => import('@/views/market/detail')
    },
    {
      path: '/car',
      component: () => import('@/views/market/car')
    },
    {
      path: '/lib',
      component: () => import('@/views/pcenter/lib')
    },
    {
      path: '/category',
      component: () => import('@/views/market/category')
    },
    {
      path: '/search',
      component: () => import('@/views/market/search')
    },
    {
      path: '/setInfo',
      component: () => import('@/views/pcenter/setInfo')
    },
    {
      path: '/order',
      component: () => import('@/views/pcenter/order')
    },
    {
      path: '/msg',
      component: () => import('@/views/pcenter/message')
    }
    ]
  },
  // {
  //   path: '/header',
  //   component: () => import('@/views/layout/components/header')
  // },
  // {
  //   path: '/footer',
  //   component: () => import('@/views/layout/components/footer')
  // },
  // {
  //   path: '/layout',
  //   component: () => import('@/views/layout/index')
  // },

  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: '模版',
  //     icon: 'nested'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: '日志' }
  //     },
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: 'Menu1' },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'Menu1-1',
  //           meta: { title: 'Menu1-1' }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: { title: 'Menu1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: { title: 'Menu1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: { title: 'Menu1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: { title: 'Menu1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       meta: { title: 'menu2' }
  //     }
  //   ]
  // },

  { path: '/404', component: () => import('@/views/404'), hidden: true },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  mode: 'history', // 后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
