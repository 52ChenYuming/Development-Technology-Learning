<template>
  <div class="login">
    <div class="login-wrapper">
      <h2>旅梦后台管理系统</h2>
      <div class="wrap">
        <el-input v-model="username"
                  placeholder="请输入用户名"
                  prefix-icon="el-icon-user"></el-input>
        <el-input v-model="password"
                  placeholder="请输入密码"
                  prefix-icon="el-icon-lock"></el-input>
        <el-button type="primary"
                   @click="login">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: 'admin',
      password: '123456'
    }
  },
  methods: {
    login () {
      if (this.username === 'admin' && this.password === '123456') {
        this.$router.push({ path: '/home', query: { user: this.username } })
      } else {
        this.$message.error('账号或密码错误')
      }
    }
  }
}
</script>

<style>
.login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-wrapper {
  width: 300px;
  height: 260px;
  box-shadow: 0 0 5px #999;
  text-align: center;
  border-radius: 5px;
  text-align: center;
}
.wrap {
  padding: 10px 50px;
}
input {
  margin: 10px 0;
}
</style>