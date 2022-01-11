<template>
  <div class="app">
    <!-- header -->
    <v-header />
    <!-- Tab -->
    <div class="page">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
export default {
  data () {
    return {}
  },
  components: {
    'v-header': Header
  }
}
</script>

<style lang="stylus"></style>
