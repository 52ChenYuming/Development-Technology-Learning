<template>
  <transition name="fade">
    <div class="header-detail">
      <div class="detail-wrapper">
        <div class="detail-main">
          <h1 class="name">店铺名字</h1>
          <div class="star-wrapper">
            ☆☆☆☆☆
          </div>
          <div class="title">
            <div class="text">优惠信息</div>
          </div>

          <ul class="supports">
            <li class="supports-item"
                v-for="(item,index) in seller.supports"
                :key="index">
              <support-ico :size=2
                           :type="item.type" />
              <span class="text">{{item.description}}</span>
            </li>
          </ul>

          <div class="title">
            <div class="text">商家公告</div>
          </div>

          <div class="bulletin">
            <p class="content">{{seller.bulletin}}</p>
          </div>
        </div>
      </div>

      <div class="detail-close"
           @click.stop="hide">
        <i class="iconfont icon-close"></i>
      </div>
    </div>
  </transition>
</template>

<script>
import supportIco from '../support-ico/support-ico.vue'
export default {
  props: {
    seller: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  components: {
    supportIco
  },
  methods: {
    hide () {
      // 给父组件传值
      this.$emit('hide', false)
    }
  },
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable.styl';

.header-detail 
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  overflow: auto;
  background: $color-background-s;
  color: $color-white;
  opacity: 1;
  backdrop-filter: blur(10px);
  &.fade-enter, &.fade-leave-to 
    opacity 0
    background: $color-background;
  
  &.fade-enter-active, &.fade-leave-active 
    transition: all 0.5;
  

  .detail-wrapper 
    display: inline-block;
    width: 100%;
    min-height: 100%;

    .detail-main 
      margin-top: 64px;
      padding: 0 10% 64px;

      .name 
        text-align: center;
        font-size: $fontsize-large;
        font-weight: bold;
        line-height: 16px;
      

      .star-wrapper 
        margin-top: 8px;
        padding: 2px 0;
        text-align: center;
      

      .title 
        text-align: center;
        display: flex;
        align-items: center;
        margin: 28px auto 24px auto;

        &::before, &::after 
          content: '';
          background: rgba(255, 255, 255, 0.2);
          flex: 1;
          height: 1px;
        

        .text 
          font-size: $fontsize-medium;
          font-weight: bold;
          padding: 0 12px;
        
        .supports
          margin 0 auto
          &-item
            display flex
            align-items center
            padding 0 12px
            margin-bottom 12px
            &:last-child
              margin-bottom 0
            .text
              line-height 16px
              font-size $fontsize-small
              margin-left 6px
        .bulletin
          margin 0 auto
          .content
            padding 0 12px
            line-height 24px
            font-size $fontsize-small
    .detail-close
      position relative
      width 30px
      height 30px
      margin -64px auto 0 auto
      font-size $fontsize-large-xxxx
      clear both
</style>