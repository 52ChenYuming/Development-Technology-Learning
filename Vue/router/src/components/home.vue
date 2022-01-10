<template>
  <div class="home">
    这是首页 ----{{$route.params.id}}
    <router-link to="/home/list1">列表1</router-link>
    <router-link to="/home/list2">列表2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>