<template>
  <div class="app">
    <!-- header -->
    <v-header :seller="seller" />
    <!-- Tab -->
    <div class="page">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import { getSeller } from '@/api';

export default {
  data () {
    return {
      seller:{}
    }
  },
  components: {
    'v-header': Header
  },
  created() {
    getSeller().then(seller =>{
      console.log(seller);
      this.seller = seller
    })
  },
}
</script>

<style lang="stylus"></style>
