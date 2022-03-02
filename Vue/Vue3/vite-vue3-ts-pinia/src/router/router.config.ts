import { RouteRecordRaw } from "vue-router";
import BasicLayout from '../layouts/basicLayout/index.vue'
import Header from '../layouts/components/Header.vue'
 
export const accessRoutes: RouteRecordRaw[] = [
  {
    path: '/app',
    name: 'app',
    component: BasicLayout ,
    meta: { title: '管理平台' },
    children: [
      {
        path: '/app/home',
        component: () => import('../views/home/index.vue'),
        name: 'home'
      }
    ]
  }
]

const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue'),
    meta: { title: '登录' }
  },
  {
    path: '/',
    name: 'Root',
    redirect: '/app'
  },
  ...accessRoutes

]

export default constantRoutes