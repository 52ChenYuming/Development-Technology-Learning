
<template>
  <div @click="add">{{ count }}</div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

let store = useStore()
let count = computed(() => store.state.count)

// Store 中的数据由Vuex统一管理，所以要用store.commit('add')去触发Vuex中的mutation修改数据
function add() {
  store.commit('add')
}
</script>