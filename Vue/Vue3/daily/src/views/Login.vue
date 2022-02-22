<template>
  <Header :title="'登录'" />
  <div class="auth">
    <img src="../assets/logo.png" alt class="logo" />
    <!-- 登录 -->
    <van-form @submit="onSubmit" class="form-wrap" v-if="type === 'login'">
      <van-cell-group inset class="form">
        <van-field
          v-model="username"
          name="用户名"
          label="账号"
          placeholder="请输入账号"
          :rules="[{ required: true, message: '请填写账号' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">登录</van-button>
        <p @click="changeType('register')" class="change-btn">没有账号，前往注册</p>
      </div>
    </van-form>
    <!-- 注册 -->
    <van-form @submit="onSubmit" class="form-wrap" v-if="type === 'register'">
      <van-cell-group inset class="form">
        <van-field
          v-model="username"
          name="用户名"
          label="账号"
          placeholder="请输入账号"
          :rules="[{ required: true, message: '请填写账号' }]"
        />
        <van-field
          center
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field center clearable label="验证码" placeholder="验证码" v-model="verify">
          <template #button>
            <vue-image-verify ref="verifyRef" />
          </template>
        </van-field>
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">注册</van-button>
        <p class="change-btn" @click="changeType('login')">已有账号，点击登录</p>
      </div>
    </van-form>
  </div>
</template>



<script setup>

import { ref } from 'vue';
import Header from '@/components/Header.vue';
import VueImageVerify from '@/components/VueImageVerify.vue';
import { Toast } from 'vant';
import axios from '../utils/axios'
import { useRouter } from 'vue-router';

const router = useRouter()
const username = ref('')
const password = ref('')
const type = ref('login')
const verify = ref('')
const verifyRef = ref(null) // 验证码子组件

const changeType = (t) => {
  type.value = t
}

const onSubmit = async () => {

  if (type.value == 'login') {
    // console.log(verifyRef.value.imgCode);
    // 发请求
    const { data } = await axios.post('/user/login', {
      username: username.value,
      password: password.value
    })
    console.log(data);
    Toast.success('登录成功')
    localStorage.setItem('token',data.token)
    router.push('/')
  } else {
    if (verify.value != verifyRef.value.imgCode) { //输入的验证码不等于生成的
      Toast.fail('验证码错误');
      return
    }
    // 发请求
    const { data } = await axios.post('/user/register', {
      username: username.value,
      password: password.value
    })
    console.log(data);
    Toast.success('注册成功')
    type.value = 'login'
  }
}

</script>



<style lang="less" scoped>
@import url("../style/custom.less");
.auth {
  height: calc(100% - 46px);
  padding: 30px 20px 0 20px;
  box-sizing: border-box;
  background: @primary-bg;
  .logo {
    width: 150px;
    display: block;
    margin: 0 auto;
    margin-bottom: 30px;
  }
  .change-btn {
    text-align: center;
    margin: 10px 0;
    color: @link-color;
    font-size: 14px;
  }
}
</style>