<template>
  <div>
    <p>left</p>

    <div>
      <button @click="submit">submit</button>
    </div>
  </div>
</template>

<script>
import bus from '@/bus/index.js'
export default {
  data() {
    return {
      leftMsg: 'left message'
    }
  },
  methods: {
    submit() {
      console.log(bus);
      bus.$emit('send', this.leftMsg)
    }
  }
}
</script>

<style>

</style>