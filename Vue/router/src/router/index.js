import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/home.vue';
import About from '../components/about.vue';
import List1 from '../components/list1.vue';
import List2 from '../components/list2.vue';
import Mine from '../components/mine.vue';
import Detail from '../components/detail.vue';
// 让路由在vue中生效
Vue.use(Router);

//路由的配置
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home/:id', //当浏览器url为改路径时
      component: Home,
      children: [
        {
          path: 'list1',
          component: List1,
          alias: 'home1',
        },
        {
          path: 'list2',
          component: List2,
        },
      ],
    },
    {
      path: '/about', //当浏览器url为改路径时
      name: '/about',
      component: About,
    },
    {
      path: '/mine',
      name: 'cym',
      component: Mine,
    },
    {
      path: '/detail',
      component: Detail,
      // beforeEnter: (to, from, next) => {
      //   console.log(from);
      //   console.log(to);
      //   next();
      // },
    },
  ],
});
