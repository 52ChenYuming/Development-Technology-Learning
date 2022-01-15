import Vue from 'vue';
import Router from 'vue-router';

import Login from '@/views/Login';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/Home'),
      children: [
        {
          path: 'detail',
          component: () => import('@/views/Detail.vue'),
        },
        {
          path: 'form',
          component: () => import('@/views/Form.vue'),
        },
      ],
    },
  ],
});
