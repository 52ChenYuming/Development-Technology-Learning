<template>
  <div>
    <p>left</p>

    <div>
      <button @click="submit">submit</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leftMsg: 'left message'
    }
  },
  methods: {
    submit() {
      this.$emit('sub', this.leftMsg)
    }
  }
}
</script>

<style>

</style>