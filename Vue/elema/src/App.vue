<template>
  <div class="app">
    <!-- header -->
    <v-header :seller="seller" />
    <!-- Tab -->
    <div class="tab">
      <div class="tab-wrap">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-wrap">
        <router-link to="/comment">评论</router-link>
      </div>

      <div class="tab-wrap">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <div class="page">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import { getSeller } from '@/api';

export default {
  data () {
    return {
      seller: {}
    }
  },
  components: {
    'v-header': Header
  },
  created () {
    getSeller().then(seller => {
      console.log(seller);
      this.seller = seller
    })
  },
}
</script>

<style lang="stylus">
@import './common/stylus/variable.styl';
  .tab
    display: flex
    height 36px
    line-height 36px
    &-wrap
      flex 1
      text-align center
      a
        display: block
        width 100%
        height 100%
        text-decoration: none;
        color: #666
      .router-link-exact-active {
        color: $color-red = #f01414
        border-bottom 2px solid $color-red = #f01414
}
</style>
