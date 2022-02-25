<template>
  <div class="block"></div>
  <van-nav-bar class="header" :title="title" left-text="返回" left-arrow @click-left="back">
    <template #right>
      <van-icon name="more-o" @click="more"/>
    </template>
  </van-nav-bar>
</template>



<script>
import { useRouter } from "vue-router"
import { Toast } from "vant"

export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  setup() {
    const router = useRouter()
    const back = () => {
      router.back()
    }
    const more = () => {
      Toast.success('此功能还没开发哦！')
    }
    return {
      back,
      more
    }
  }
}


</script>



<style lang="less" scoped>
.block {
  width: 100%;
  height: 46px;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  .icon-more {
    font-size: 20px;
  }
}
</style>