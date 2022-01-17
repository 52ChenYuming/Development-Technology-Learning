<template>
  <div>
    <p>right</p>
    
    <p>{{msg}}</p>
  </div>
</template>

<script>
import bus from '@/bus/index.js'
export default {
  data() {
    return {
      msg: ''
    }
  },
  mounted() {
    bus.$on('send', (e) => {
      console.log(e);
      this.msg = e
    })
  }
}
</script>

<style>

</style>