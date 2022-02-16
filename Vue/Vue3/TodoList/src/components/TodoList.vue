<script setup>
import { computed, reactive, toRefs } from 'vue';

const state = reactive({
  newTodo: '',
  todos: [
    { id: 1, title: '吃饭', completed: false },
    { id: 2, title: '睡觉', completed: false },
  ]
})
let { newTodo, todos } = toRefs(state)  //把state里面的值代理出来

function addTodo() {
  let value = newTodo.value && newTodo.value.trim()
  if (!value) {
    return
  }
  state.todos.push({
    id: state.todos.length + 1,
    title: newTodo.value,
    completed: false
  })
}

const remain = computed(() => state.todos.filter(todo => !todo.completed).length)
</script>

<template>
  <section class="todoapp">
    <header class="header">
      <h1>Vue3 TodoList</h1>
      <input
        type="text"
        class="new-todo"
        placeholder="请输入"
        v-model="newTodo"
        @keyup.enter="addTodo"
      />
    </header>

    <section class="main">
      <ul class="todo-list">
        <li class="todo" v-for="todo in todos" :key="todo.id">
          <div class="view">
            <input type="checkbox" name id="toggle" v-model="todo.completed">
            <label>{{ todo.title }}</label>
            <button class="destroy"></button>
          </div>
        </li>
      </ul>
    </section>

    <footer class="footer">
      <span class="todo-count">
        <strong>2</strong> left
      </span>
      <button class="clear-completed" v-show="todos.length>remain">clear-completed</button>
    </footer>
  </section>
</template>

<style scoped>
</style>
