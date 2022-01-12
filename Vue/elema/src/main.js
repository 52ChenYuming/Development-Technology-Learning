import Vue from 'vue';
import App from './App.vue';
import router from './router';

import './common/stylus/index.styl';
import './common/fonts/iconfont.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
