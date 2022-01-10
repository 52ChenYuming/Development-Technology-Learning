<template>
  <div id="app">

    <div class="header">
      <span>根页面 |</span>
      <router-link to="/home/123">首页 |</router-link>
      <router-link :to="{name:'/about',params:{user:username}}">关于 |</router-link>
      <span class="to-Mine"
            @click="toMine">我的</span>
    </div>

    <router-link to="/detail">详情</router-link>
    <router-view></router-view>
    <!-- 路由入口 -->

  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      username: '启明'
    }
  },
  methods: {
    toMine () {
      // 编程式路由跳转
      this.$router.push({ name: 'cym', params: { num: 520 } })
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
</style>
