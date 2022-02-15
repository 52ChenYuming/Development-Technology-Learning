<script setup>
import { reactive, toRefs } from 'vue';

  const state = reactive({
    newTodo: '',
    todos: [
      { id: 1, title: '吃饭', completed: false},
      { id: 2, title: '睡觉', completed: false},
    ]
  })
  let { newTodo, todos } = toRefs(state)  //把state里面的值代理出来

  function addTodo() {
    let value = newTodo.value && newTodo.value.trim()
    if (!value) {
      return 
    }
    state.todos.push({
      id: state.todos.length+1,
      title: newTodo.value,
      completed: false
    })
  }
</script>

<template>
  <section class="todoapp">
    <header class="header">
      <h1>Vue3 TodoList</h1>
      <input type="text" class="new-todo" placeholder="请输入" v-model="newTodo" @keyup.enter="addTodo">
    </header>

    <section class="main">
      <ul class="todo-list">
        <li class="todo" v-for="todo in state.todos" :key="todo.id">
          <div class="view">
            <label for="">{{todo.title}}</label>
            <button class="destroy"></button>
          </div>
        </li>
      </ul>
    </section>
  </section>
</template>

<style scoped>

</style>
