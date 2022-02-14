<template>
  <h1>{{state.count}}</h1>
  <button @click="add">累加</button>
</template>

<script setup>

import { reactive } from 'vue';

const state = reactive({ 
  count: 1
 })

function add() {
  state.count++
  console.log(state.count);
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
