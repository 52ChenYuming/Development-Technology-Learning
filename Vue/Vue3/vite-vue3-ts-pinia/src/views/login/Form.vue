<template>
  <div class="form_box">
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
    >
      <p class="text">请输入手机号登录：</p>
      <a-form-item name="username">
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <p class="text">请输入密码：</p>
      <a-form-item name="password">
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item>
        <a-button type="primary" html-type="login">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "@vue/reactivity";
import { useUserStore } from '../../store/modules/user'
import { useRouter } from 'vue-router'

const router = useRouter() // hooks函数

interface formStateType {
  username: string
  password: string
}

const formState = reactive<formStateType>({
  username: '',
  password: ''
})

const userStore = useUserStore()
const onFinish = async(value: any) => {
  console.log(value);
  // 请求
  await userStore.login(value)
  // 页面跳转
  router.replace('/')
}
</script>

<style>
.form_box{
  margin-top: 30px;
}
.text{
  font-size: 14px;
  line-height: 20px;
  color: #999;
  letter-spacing: 1.1px;
  margin-bottom: 10px;
}
</style>