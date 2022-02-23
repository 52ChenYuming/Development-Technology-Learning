<template>
  <div class="login-container rowCC">
    <a-card :bordered="false" class="login" :body-style="{width: '480px', padding: '30px 0'}">
      <div class="login_right_container">
        <div class="title_box">
          <h2 class="title">Vite-Vue3-TS</h2>
        </div>
        <!-- form -->
        <login-form></login-form>
      </div>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import LoginForm from './Form.vue'
</script>

<style>
.login-container{
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to right, #74ebd5 0%, #9face6 100%);
}
.login{
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
}
.login_right_container{
  width: 360px;
  margin: 0 auto;
}
.title_box{
  display: flex;
}
.title{
  font-size: 22px;
  color: #000;
}
</style>