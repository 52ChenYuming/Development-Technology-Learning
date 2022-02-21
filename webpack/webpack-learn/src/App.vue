<template>
  <div @click="testFunction">你好 ，hello world！</div>
</template>



<script>

export default {
  setup() {
    const testFunction = () => {
      console.log('这是ES6');
    }
    return {
      testFunction
    }
  }

}

</script>



<style scoped>
div{
  color: blue;
}
</style>