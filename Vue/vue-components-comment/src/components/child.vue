<template>
  <div class="child">
    <p>这是一个子组件</p>
    <p>勇泉添加的内容</p>
    <p>蜗牛添加的内容</p>
    <p>陈煜明添加的内容</p>
    <p>陈煜明添加的内容</p>
    <p>骑着蜗牛追火箭</p>
    <p>hhh</p>

    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String
    }
  }
}
</script>

<style>
</style>