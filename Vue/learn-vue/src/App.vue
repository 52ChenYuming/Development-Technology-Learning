<template>
  <div id="app">
    <ul>
      <li v-for="(nav,index) in navs"
          :key="index"
          @click="toDetail(index)">
        <img :src="nav.icon"
             alt="">
        {{ nav.title }}
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  data () {
    return {
      navs: [
        {
          title: '春天',
          icon: require('@/assets/images/faxian.png')
        },
        {
          title: '夏天',
          icon: require('@/assets/images/book.png')
        },
        {
          title: '秋天',
          icon: require('@/assets/images/yonghu.png')
        },
        {
          title: '冬天',
          icon: require('@/assets/images/xiaoxi.png')
        }
      ]
    }
  },
  methods: {
    toDetail (index) {
      // 编程式路由跳转
      this.$router.push({ path: '/detail', query: { index: index } })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul li {
  list-style: none;
  display: inline-block;
  margin-right: 20px;
}
li img {
  width: 30px;
  height: 30px;
  cursor: pointer;
}
</style>
