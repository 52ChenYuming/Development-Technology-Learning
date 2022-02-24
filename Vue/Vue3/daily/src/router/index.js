import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('@/views/Detail.vue')
  },
  {
    path: '/data',
    name: 'data',
    component: () => import('@/views/Data.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/User.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
