<template>
  <div class="detail">
    这是详情页
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  beforeRouteEnter (to, from, next) {
    console.log(from, '准备进入页面');
    next();
  },
  beforeRouteLeave (to, from, next) {
    console.log(to, '准备离开');
    next();
  }
}
</script>

<style>
</style>