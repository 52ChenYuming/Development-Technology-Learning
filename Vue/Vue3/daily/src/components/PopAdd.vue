<template>
  <van-popup v-model:show="show" round position="bottom">
    <div class="add-wrap">
      <div class="header">
        <span class="close">
          <van-icon name="cross" />
        </span>
        <van-button class="add-btn" size="small" type="success">确定</van-button>
      </div>

      <div class="filter">
        <div class="type">
          <span class="expense">支出</span>
          <span class="income">收入</span>
        </div>
        <div class="time">
          02-22
          <van-icon name="arrow-down" />
        </div>
      </div>

      <div class="money">
        <span class="sufix">$</span>
        <span class="amount animation">123.5</span>
      </div>

      <div class="type-wrap">
        <!-- 支出 -->
        <div class="type-body" v-if="payType == 'expense'">
          <div class="type-item" v-for="item in 10" :key="item">
            <span class="iconfont-wrap expense">
              <van-icon name="shop-o" />
            </span>
            <span>餐饮</span>
          </div>
        </div>
        <!-- 收入 -->
        <div class="type-body" v-else>
          <div class="type-item" v-for="item in 10" :key="item">
            <span class="iconfont-wrap expense">
              <van-icon name="cash-o" />
            </span>
            <span>工资</span>
          </div>
        </div>
      </div>

      <!-- 添加备注 -->
      <div class="remark">添加备注</div>

      <van-number-keyboard :show="show" @blur="show = true" @input="onInput" @delete="onDelete" extra-key="."/>
    </div>
  </van-popup>
</template>



<script>
import { reactive, toRefs } from "vue"

export default {
  setup() {
    const state = reactive({
      show: true,
      payType: 'expense'
    })
    return {
      ...toRefs(state)
    }
  }
}

</script>



<style lang="less" scoped>
@import url("../style/custom.less");
.add-wrap {
  padding-top: 12px;
  .header {
    display: flex;
    justify-content: space-between;
    padding: 0 24px;
    .van-icon-cross {
      font-size: 20px;
      color: @color-text-secondary;
    }
    .close {
      display: flex;
      align-items: center;
    }
    .add-btn {
      padding: 0 12px;
      background-color: @primary;
      border-color: @primary;
    }
  }
  .filter {
    padding: 12px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .type {
      span {
        display: inline-block;
        background: #f5f5f5;
        color: @color-text-caption;
        padding: 4px 12px;
        font-size: 12px;
        border-radius: 24px;
        border: 1px solid #f5f5f5;
      }
      .expense {
        margin-right: 6px;
        &.active {
          background-color: #eafbf6;
          border-color: @primary;
          color: @primary;
        }
      }
      .income {
        &.active {
          background-color: #fbf8f0;
          border-color: @text-warning;
          color: @text-warning;
        }
      }
    }
    .time {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 4px 12px;
      background-color: #f0f0f0;
      border-radius: 20px;
      color: @color-text-base;
      .icon-down {
        font-size: 12px;
        margin-left: 5px;
      }
    }
  }
  .money {
    padding-bottom: 12px;
    border-bottom: 1px solid #e9e9e9;
    margin: 0 24px;
    .sufix {
      font-size: 36px;
      font-weight: bold;
      vertical-align: top;
    }
    .amount {
      font-size: 40px;
      padding-left: 10px;
    }
  }
  .animation::after {
    content: "";
    display: inline-block;
    margin-left: 5px;
    width: 2px;
    height: 28px;
    animation: blink 1s infinite steps(1, start);
  }
  @keyframes blink {
    0% {
      background-color: white;
    }
    50% {
      background-color: @color-text-secondary;
    }
    100% {
      background-color: white;
    }
  }
  .type-wrap {
    display: flex;
    overflow-x: auto;
    margin: 0 24px;
    margin-bottom: 20px;
    * {
      touch-action: pan-x;
    }
    .type-body {
      display: flex;
      white-space: nowrap;
      .type-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 16px 12px 10px 12px;
        .iconfont-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f5f5f5;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          margin-bottom: 5px;
          .iconfont {
            color: @color-text-caption;
            font-size: 20px;
          }
        }
        .expense {
          &.active {
            background-color: @primary;
            .iconfont {
              color: #fff;
            }
          }
        }
        .income {
          &.active {
            background-color: @text-warning;
            .iconfont {
              color: #fff;
            }
          }
        }
      }
    }
  }
  .remark {
    padding: 0 24px;
    padding-bottom: 12px;
    color: #4b67e2;
  }
  .van-number-keyboard {
    position: unset;
  }
  .van-dialog__confirm {
    color: @primary;
  }
}
</style>