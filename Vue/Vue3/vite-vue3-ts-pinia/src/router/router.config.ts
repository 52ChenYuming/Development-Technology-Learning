import { RouteRecordRaw } from "vue-router";

export const accessRoutes: RouteRecordRaw[] = [
  // {
  //   path: '/app',
  //   name: 'app',
  //   component: ,
  //   meta: { title: '管理平台' },
  //   children: [
      
  //   ]
  // }
]

const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue'),
    meta: { title: '登录' }
  }
]

export default constantRoutes