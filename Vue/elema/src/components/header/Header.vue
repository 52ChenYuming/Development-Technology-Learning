<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg" alt="" />
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">粥品香坊（回龙观）</span>
        </div>
        <div class="description">蜂鸟专送/38分钟送达</div>
        <div class="support">
          <support-ico :size=1 :type=0></support-ico>
          <span class="text">在线支付满28减5</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SupportIco from '@/components/support-ico/support-ico.vue'
export default {
  data() {
    return {
    }
  },
  components:{
    SupportIco 
  }
};
</script>

<style lang="stylus">
@import '../../common/stylus/variable.styl';
@import '../../common/stylus/mixin.styl';

.header
  position relative
  overflow hidden
  color $color-white
  background $color-background-ss
  .content-wrapper
    position relative
    display flex
    padding 24px 12px 18px 24px
    align-items center
    .avatar
      flex 0 0 64px
      margin-right 16px
      img
        border-radius 2px
    .content
      flex 1
      .title
        display flex
        align-items center
        margin-bottom 8px
        .brand
          width 30px
          height 18px
          bg-image('brand')
          background-size 30px 18px
          background-repeat no-repeat
          vertical-align middle
        .name
          margin-left: 6px
          font-size: $fontsize-large
          font-weight bold
          vertical-align: middle
          line-height: 1
      .description
        font-size $fontsize-small
        margin-bottom: 8px
        line-height 12px
      .support
        display: flex
        align-items center
        .text
          line-height 12px
          font-size: $fontsize-small-s
          margin-left 4px

</style>

