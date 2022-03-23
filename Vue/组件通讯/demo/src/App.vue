<template>
  <div class="wrap">
    <input type="text" class="form-control" />
    <button @click="handleAdd">添加</button>
  </div>
  <ListItem :list="list"></ListItem>
</template>

<script setup>
import { ref } from 'vue';
import ListItem from './components/ListItem.vue';

const list = ref(['javascript', 'html', 'css'])
const value = ref('')

const handleAdd = () => {
  list.value.push(value.value)
}
</script>

<style>

</style>
