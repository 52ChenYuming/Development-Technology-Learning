<template>
  <div class="header" @click="showDetail">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64"
             height="64"
             :src="seller.avatar"
             alt="" />
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
        <div class="support"
             v-if="seller.supports">
          <support-ico :size=1
                       :type="seller.supports[0].type"></support-ico>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>

      <div class="support-count"
           v-if="seller.length">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="iconfont icon-zuoyoujiantou"></i>
      </div>

    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span>
      <div class="bulletin-text">{{seller.bulletin}}</div>
      <i class="iconfont icon-zuoyoujiantou"></i>
    </div>
    <!-- bg -->
    <div class="background">
      <img width="100%"
           height="100%"
           :src="seller.avatar"
           alt="">
    </div>
    <!-- detail -->
    <header-detail v-show="detailVisible" :seller="seller" @hide="hideDetail" />
  </div>
</template>

<script>
import SupportIco from '@/components/support-ico/support-ico.vue'
import HeaderDetail from '@/components/header-detail/Header-detail.vue'
export default {
  props: {
    seller: {
      type: Object,
      default () {
        return {}
      }
    }

  },
  data () {
    return {
      detailVisible:false,
    }
  },
  components: {
    SupportIco,
    HeaderDetail
  },
  methods: {
    showDetail(){
      this.detailVisible = true
    },
    hideDetail(){
      this.detailVisible = false
    }
  },
};
</script>

<style lang="stylus">
@import '../../common/stylus/variable.styl';
@import '../../common/stylus/mixin.styl';

.header {
  position: relative;
  overflow: hidden;
  color: $color-white;
  background: $color-background-ss;

  .content-wrapper {
    position: relative;
    display: flex;
    padding: 24px 12px 18px 24px;
    align-items: center;

    .avatar {
      flex: 0 0 64px;
      margin-right: 16px;

      img {
        border-radius: 2px;
      }
    }

    .content {
      flex: 1;

      .title {
        display: flex;
        align-items: center;
        margin-bottom: 8px;

        .brand {
          width: 30px;
          height: 18px;
          bg-image('brand');
          background-size: 30px 18px;
          background-repeat: no-repeat;
          vertical-align: middle;
        }

        .name {
          margin-left: 6px;
          font-size: $fontsize-large;
          font-weight: bold;
          vertical-align: middle;
          line-height: 1;
        }
      }

      .description {
        font-size: $fontsize-small;
        margin-bottom: 8px;
        line-height: 12px;
      }

      .support {
        display: flex;
        align-items: center;

        .text {
          line-height: 12px;
          font-size: $fontsize-small-s;
          margin-left: 4px;
        }
      }
    }

    .support-count {
      -ms-flex-align: center;
      -webkit-box-align: center;
      align-items: center;
      background: rgba(7, 17, 27, 0.2);
      border-radius: 14px;
      bottom: 14px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      height: 24px;
      line-height: 24px;
      padding: 0 8px;
      position: absolute;
      right: 12px;
      text-align: center;

      .icon-zuoyoujiantou {
        font-size: $fontsize-small-s;
      }
    }
  }

  .bulletin-wrapper {
    display: flex;
    height: 28px;
    line-height: 28px;
    padding: 0 8px;
    background: $color-background-sss;
    align-items: center;

    .bulletin-title {
      flex: 0 0 22px;
      width: 22px;
      height: 12px;
      margin-right: 4px;
      bg-image('bulletin');
      background-size: 22px 12px;
      background-repeat: no-repeat;
    }

    .bulletin-text {
      flex: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: $fontsize-small-s;
    }

    .iconfont {
      width: 10px;
      font-size: $fontsize-small-s;
    }
  }

  .background {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    filter: blur(10px);
  }
}
</style>

