import Vue from 'vue';
import VueRouter from 'vue-router';
import Goods from '@/views/goods/Goods.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redeirect:'/goods'
  },
  {
    path: '/goods',
    name: 'goods',
    component: Goods
  },
  {
    path: '/comment',
    name: 'comment',
    component: () => import('@/views/comment/Comment.vue') //路由按需加载
  },
  {
    path: '/seller',
    name: 'seller',
    component: () => import('@/views/seller/Seller.vue') //路由按需加载
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
