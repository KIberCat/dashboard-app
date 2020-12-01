import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/HomePage'),
    meta: {
      layout: 'main-layout'
    }
  },
  {
    path: '/cloud-one',
    name: 'CloudOne',
    component: () => import('@/pages/CloudOnePage'),
    meta: {
      layout: 'main-layout'
    }
  },
  {
    path: '/cloud-two',
    name: 'CloudTwo',
    component: () => import('@/pages/CloudTwoPage'),
    meta: {
      layout: 'main-layout'
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/pages/DashboardPage'),
    meta: {
      layout: 'dashboard-layout'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
