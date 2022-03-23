<template>
  <div class="child">
    <ul class="list-group">
      <li v-for="item in props.list" :key="item">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({  //defineProps专门用来解析父组件传递过来的数据
  list: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>

</style>
