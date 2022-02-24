<template>
  <van-tabbar v-model="active" active-color="#39be77" inactive-color="#000">
    <van-tabbar-item icon="notes-o" name="/home" to="/home">明细</van-tabbar-item>
    <van-tabbar-item icon="bar-chart-o" name="/data" to="/data">统计</van-tabbar-item>
    <van-tabbar-item icon="user-o" name="/user" to="/user">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute} from 'vue-router'

const router = useRouter()
const route = useRoute()
const active = ref('/home')

router.afterEach(() => {
  // console.log(route.path);
  active.value = route.path
})
</script>

<style>
</style>