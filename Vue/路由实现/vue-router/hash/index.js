import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js'
// import RouterLink from './RouterLink.vue'
// import RouterView from './RouterView.vue'

const routes = {
  './home' :{
    template: '<h2>Home</h2>'
  },
  './about' :{
    template: '<h2>About</h2>?'
  }
}

const app = new Vue({
  el: '#app',
  components: {
    'router-link': RouterLink,
    'router-view': RouterView
  },
  beforeCreate() {
    this.$routes = routes
  }
})
