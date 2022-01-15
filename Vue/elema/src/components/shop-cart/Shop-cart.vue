<template>
  <div>
    <div class="shop-cart">
      <div class="content"
           @click="togolist">
        <div class="content-left">
          <div class="logo-wrapper">
            <div class="logo"
                 :class="{'highlight':num>0}">
              <i class="iconfont icon-03"
                 :class="{'highlight':num>0}"></i>
            </div>
            <div class="num"
                 v-show="num>0">{{num}}</div>
          </div>
          <div class="price "
               :class="{'highlight':num>0}">${{totalPrice}}</div>
          <div class="desc">另需配送费{{deliveryPrice}}元</div>
        </div>
        <div class="content-right">
          <div class="pay"
               :class=" totalPrice >= minPrice ? 'enough':'not-engough' ">
            {{payDesc}}
          </div>
        </div>
      </div>
      <!-- list -->
      <transition name="fold">
        <div class="shopcart-list"
             v-show="listShow">
          <div class="list-header">
            <div class="title">购物车</div>
            <div class="empyt"
                 @click="setEmpty">清空</div>
          </div>
          <div class="list-content"
               ref="listContent">
            <ul>
              <li class="food"
                  v-for="(item, index) in selectFoods"
                  :key="index">
                <span class="name">{{item.name}}</span>
                <div class="price">
                  <span>${{item.price * item.count}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <cart-control :food="item" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
    <!-- masker -->
    <div class="masker"
         v-show="listShow"></div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import CartControl from '../cart-control/Cart-control.vue'
export default {
  components: { CartControl },
  props: {
    selectFoods: {
      type: Array,
      default () {
        return []
      }
    },
    minPrice: {
      type: Number,
      default: 0
    },
    deliveryPrice: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      listShow: false
    }
  },
  computed: {
    num () {
      let num = 0;
      for (let item of this.selectFoods) {
        num += item.count;
      }
      return num;
    },
    totalPrice () {
      let price = 0;
      this.selectFoods.forEach(food => {
        price += food.count * food.price
      })
      return price;
    },
    payDesc () {
      if (this.totalPrice === 0) {
        return `${this.minPrice}元起送`
      } else if (this.totalPrice < this.minPrice) {
        return `还差${this.minPrice - this.totalPrice}元起送`
      } else {
        return '去结算'
      }
    },
  },
  methods: {
    _initScroll () {
      this.foodScroll = new BScroll(this.$refs.listContent, {
        click: true
      })
    },
    setEmpty () {
      this.selectFoods.forEach((food) => {
        food.count = 0;
      })
    },
    togolist () {
      if (this.num) {
        this.listShow = !this.listShow
      }
    }
  },
  watch: {
    listShow (newVal, oldVal) {
      console.log(newVal, oldVal);
      if (newVal) {
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.listContent, {
              click: true
            })
          } else {
            this.scroll.refresh()//刷新页面滚动效果
          }

        })
      }
    }
  }
}
</script>

<style lang="stylus">
@import '../../common/stylus/variable.styl';

.shop-cart {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 50;
  width: 100%;
  height: 48px;

  .content {
    display: flex;
    background: $color-background;
    color: $color-light-grey;

    &-left {
      flex: 1;

      .logo-wrapper {
        vertical-align: middle;
        display: inline-block;
        position: relative;
        top: -10px;
        margin: 0 12px;
        padding: 6px;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        box-sizing: border-box;
        background: #141d27;

        .logo {
          width: 100%;
          height: 100%;
          background: $color-dark-grey;
          border-radius: 50%;
          text-align: center;

          &.highlight {
            background: $color-blue;
          }

          .iconfont {
            line-height: 44px;
            font-size: $fontsize-large-xxx;
            color: #80858a;

            &.highlight {
              color: $color-white;
            }
          }
        }

        .num {
          position: absolute;
          top: 0;
          right: 0;
          width: 24px;
          height: 16px;
          line-height: 16px;
          text-align: center;
          border-radius: 16px;
          font-size: $fontsize-small-s;
          font-weight: bold;
          color: $color-white;
          background: $color-red;
        }
      }

      .price {
        display: inline-block;
        line-height: 48px;
        padding-right: 12px;
        border-right: 1px solid rgba(255, 255, 255, 0.1);
        font-size: $fontsize-large;
        font-weight: 700;

        &.highlight {
          color: $color-white;
        }
      }

      .desc {
        display: inline-block;
        line-height: 48px;
        font-size: $fontsize-small-s;
      }
    }

    .content-right {
      flex: 0 0 105px;
      width: 105px;

      .pay {
        height: 48px;
        line-height: 48px;
        text-align: center;
        font-size: $fontsize-small;
        font-weight: 700;

        &.not-enough {
          background: #2b333b;
        }

        &.enough {
          background: $color-green;
          color: $color-white;
        }
      }
    }
  }

  .shopcart-list {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: -1;
    transform: translate3d(0, -100%, 0);

    &.fold-enter-active, &.fold-leave-active {
      transition: all 0.5s;
    }

    &.fold-enter, &.fold-leave-to {
      transform: translate3d(0, 0, 0);
    }

    .list-header {
      display: flex;
      justify-content: space-between;
      padding: 0 18px;
      height: 40px;
      line-height: 40px;
      align-items: center;
      border-bottom: 1px solid $color-background-sss;
      background: $color-background-ssss;

      .title {
        font-size: $fontsize-medium;
        color: $color-background;
      }

      .empty {
        font-size: $fontsize-small;
        color: $color-blue;
      }
    }

    .list-content {
      padding: 0 18px;
      max-height: 217px;
      overflow: hidden;
      background: #fff;

      .food {
        position: relative;
        padding: 12px 0;
        box-sizing: border-box;

        .name {
          line-height: 24px;
          font-size: 14px;
          color: rgb(7, 17, 27);
        }

        .price {
          position: absolute;
          right: 90px;
          bottom: 12px;
          line-height: 24px;
          font-size: 14px;
          font-weight: 700;
          color: rgb(240, 20, 20);
        }

        .cartcontrol-wrapper {
          position: absolute;
          right: 0;
          bottom: 6px;
        }
      }
    }
  }
}

.masker {
  background: #07111b;
  opacity: 0.6;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>