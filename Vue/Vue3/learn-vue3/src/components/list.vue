<template>
  <input type="text" v-model="title" @keydown.enter="addTodo">
  <ul>
    <li v-for="(todo,index) in todos" :key="index">{{todo}}</li>
  </ul>
</template>



<script setup>
import { reactive, ref } from 'vue';

const title = ref('')
const todos = reactive(['吃饭','睡觉'])
function addTodo() {
  todos.push(title.value)
}

</script>



<style scoped>

</style>