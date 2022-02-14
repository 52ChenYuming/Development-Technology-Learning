<template>
  <h1>{{state.count}}*2={{double}}</h1>
  <button @click="add">累加</button>
  <h2>{{add_10}}</h2>
</template>

<script setup>

import { computed, onMounted, reactive } from 'vue';

// 将state数据变成响应式数据
const state = reactive({ 
  count: 1
})

function add() {
  state.count++
}
const double = computed(()=>state.count*2)

const add_10 = computed(()=> state.count+10)

onMounted(() => {
  console.log('onMounted');
})

// vue2 里面的data ,methods, computed都是挂载在this上的,这里面有两个明显的缺点
// 1. 不利于类型推导
// 2. 如果一个项目自始至终都没有用过computed，但computed也会被打包
// vue3的手动引入写法更利于 Tree-shaking

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
