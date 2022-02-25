<template>
  <router-view/>
  <NavBar v-if="show"></NavBar>
</template>

<script setup>
import { ref } from 'vue';
import NavBar from './components/NavBar.vue';
import { useRouter } from 'vue-router';

let show = ref(true)
const menu = ref(['/home','/data','/user'])
const router = useRouter()

router.afterEach(() => { //menu里面的路径都是要展示底部导航
  show = menu.value.includes(router.currentRoute.value.path)
})


</script>

<style lang="less">

</style>
