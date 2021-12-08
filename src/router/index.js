import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user',
    name: 'Cabinet',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/Cabinet.vue'),
    children: [
      {
        path: 'settings',
        name: 'Settings',
        component: () => import('../components/content-cabinet/Settings.vue')
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: () => import('../components/content-cabinet/Notifications.vue')
      },
      {
        path: 'faq',
        name: 'FAQ',
        component: () => import('../components/content-cabinet/FAQ.vue')
      },
      {
        path: 'balance',
        name: 'Balance',
        component: () => import('../components/content-cabinet/Balance.vue')
      },
      {
        path: 'add',
        name: 'Add',
        component: () => import('../components/content-cabinet/Add.vue')
      },
      {
        path: 'withdraw',
        name: 'Withdraw',
        component: () => import('../components/content-cabinet/Withdraw.vue')
      },
      {
        path: 'history',
        name: 'History',
        component: () => import('../components/content-cabinet/History.vue')
      },
    ]
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: 'NotFound',
  //   component: () => import(/* webpackChunkName: "about" */'../components/NotFound.vue')
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass : 'active',
  routes
})

export default router
