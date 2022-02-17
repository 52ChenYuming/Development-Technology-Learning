<template>
  <input type="text" v-model="title" @keydown.enter="addTodo" />
  <ul>
    <li v-for="(todo, index) in todos" :key="index">{{ todo }}</li>
  </ul>

  <transition name="modal">
    <div class="info-wrapper" v-if="showModel">
      <div class="info">
        你什么都没有输入
      </div>
    </div>
  </transition>
</template>



<script setup>
import { reactive, ref } from 'vue';

const title = ref('')
const todos = reactive(['吃饭', '睡觉'])
const showModel = ref(false)

function addTodo() {
  if (!title.value) {
    showModel.value = true
    setTimeout(() => {
      showModel.value = false
    }, 1500)
  } else {
    todos.push(title.value)
  }

}

</script>



<style scoped>
.info-wrapper {
  position: fixed;
  top: 0;
  width: 200px;
}

.info {
  padding: 20px;
  color: #fff;
  background: red;
}
.modal-enter-from,.modal-leave-to{
  opacity: 0;
  transform: translateX(-200px);
}

.modal-enter-active,.modal-leave-active {
  transition: all 0.3s ease;
}

</style>

