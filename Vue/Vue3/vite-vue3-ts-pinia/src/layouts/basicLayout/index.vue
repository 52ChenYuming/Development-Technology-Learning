<template>
  <a-layout>
    <Header></Header>
    <a-layout class="content">
      <a-layout-sider theme="light">
        <SideMenu></SideMenu>
      </a-layout-sider>
      <a-layout-content>
        <a-card title="Default size card">
          <a-breadcrumb>
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item>
              <a href="">Application Center</a>
            </a-breadcrumb-item>
            <a-breadcrumb-item>
              <a href="">Application List</a>
            </a-breadcrumb-item>
            <a-breadcrumb-item>An Application</a-breadcrumb-item>
          </a-breadcrumb>
        </a-card>

        <a-divider />
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue';
import SideMenu from '../components/SideMenu.vue';

</script>

<style scoped>
.content {
  height: calc(100vh - 80px);
}
</style>
