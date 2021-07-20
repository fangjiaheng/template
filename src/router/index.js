import Vue from 'vue'
import VueRouter from 'vue-router'

/* Layout */
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/testLayout'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/')
  },
  {
    path: '/testLayout',
    name: 'Layout',
    component: Layout
  }
]

const router = new VueRouter({
  routes
})

export default router
