<template>
  <div class="home">
    <el-container class="container">
      <el-header>
        <div class="title">旅梦</div>
        <div class="info">
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              {{ $route.query.user}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a">修改密码</el-dropdown-item>
              <el-dropdown-item command="b">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <!-- default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b" -->
          <el-menu class="el-menu-vertical-demo"
                   background-color="#545c64"
                   text-color="#fff"
                   active-text-color="#ffd04b"
                   router
                   default-active="/home/detail">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item index="/home/detail">
                <i class="el-icon-menu"></i>
                <span slot="title">1-1</span>
              </el-menu-item>
              <el-menu-item index="/home/form">
                <i class="el-icon-menu"></i>
                <span slot="title">1-2</span>
              </el-menu-item>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>

          </el-menu>

        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  methods: {
    handleCommand (command) {
      // this.$message('click on item ' + command);
      if (command == "b") {
        this.$router.push({ path: "/login" });
      }
    },
  },
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #545c64;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.container {
  height: 100vh;
  /* calc(100vh - 60px) */
}
.title {
  float: left;
  font-size: 34px;
}
.info {
  float: right;
}
.el-menu {
  border-right: none;
}
</style>