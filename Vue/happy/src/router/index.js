import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/item',
    name: 'item',
    component: () => import('@/views/item'),
  },
  {
    path: '/score',
    name: 'score',
    component: () => import('@/views/score'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
