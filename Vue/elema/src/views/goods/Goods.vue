<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li v-for="(item, index) in goods"
            :key="index"
            class="menu-item">
          <span class="text">
            <support-ico v-show="item.type != -1"
              :size="3"
              :type="item.type" />
            {{ item.name }}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper">商品</div>
  </div>
</template>

<script>
import { getGoods } from '@/api';
import supportIco from '../../components/support-ico/support-ico.vue';
import BScroll from 'better-scroll'

export default {
  components: { supportIco },
  data () {
    return {
      goods: [],
    };
  },
  created () {
    getGoods().then(goods => {
      this.goods = goods;
      console.log(goods);

      this.$nextTick(()=>{//nextTick中的回调函数一定会在DOM加载完毕之后才执行
        this._initScroll()//施加更优雅的滚动效果
      })
    });
  },
  methods:{ 
    _initScroll(){
      this.menuScroll = new BScroll(this.$refs.menuWrapper,{
        click: true
      })
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable.styl';

.goods 
  display: flex;
  position: absolute;
  top: 177px;
  bottom: 46px;
  width: 100%;
  overflow: hidden;

  .menu-wrapper 
    flex: 0 0 80px;
    background: $color-background-ssss
    .menu-item
      display flex
      width 60px
      height 54px
      padding 0 10px
      text-align center
      justify-content center
      line-height 14px
      align-items center
      font-size $fontsize-small

  

  .foods-wrapper 
    flex: 1;
  

</style>
