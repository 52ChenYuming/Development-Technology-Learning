<template>
  <div>
    <p>这是组件222222222</p>
    <button @click="submit">提交</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      child2Msg: '来自child2的数据'
    }
  },
  methods: {
    submit() { // 把this.child2Msg传给App.vue去使用
      this.$emit('sub', this.child2Msg) // 发布一个叫 sub 的事件，且携带一个参数
    }
  }
}
</script>

<style>

</style>