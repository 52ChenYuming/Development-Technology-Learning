<template>
  <van-popup v-model:show="show" round position="bottom">
    <div class="add-wrap">
      <div class="header">
        <span class="close" @click="toggle">
          <van-icon name="cross" />
        </span>
        <van-button class="add-btn" size="small" type="success">确定</van-button>
      </div>
      <div class="filter">
        <div class="type">
          <span
            :class="{ expense: true, active: payType === 'expense' }"
            @click="changeType('expense')"
          >支出</span>
          <span
            :class="{ income: true, active: payType === 'income' }"
            @click="changeType('income')"
          >收入</span>
        </div>
        <div class="time" @click="showDay = true">
          {{ $filters.transDay(date) }}
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
          <div class="type-item" v-for="item in expense" :key="item">
            <span class="iconfont-wrap expense">
              <van-icon :name="typeMap[item.id].name" />
            </span>
            <span>{{item.name}}</span>
          </div>
        </div>
        <!-- 收入 -->
        <div class="type-body" v-else>
          <div class="type-item" v-for="item in income" :key="item">
            <span class="iconfont-wrap expense">
              <van-icon :name="typeMap[item.id].name" />
            </span>
            <span>{{item.name}}</span>
          </div>
        </div>
      </div>

      <!-- 添加备注 -->
      <div class="remark">添加备注</div>

      <van-number-keyboard
        :show="show"
        @blur="show = true"
        @input="onInput"
        @delete="onDelete"
        extra-key="."
      />
    </div>
    <!-- 选择时间 -->
    <van-popup v-model:show="showDay" round position="bottom" :style="{ height: '46%' }">
      <van-datetime-picker
        v-model="date"
        type="date"
        title="选择时间"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
        @confirm="choseDay"
        @cancel="showDay = false"
      />
    </van-popup>
  </van-popup>
</template>



<script>
import axios from "axios"
import { onMounted, reactive, toRefs } from "vue"
import { typeMap } from '../utils'

export default {
  setup() {
    const state = reactive({
      show: true,
      payType: 'expense', //账单类型
      showDay: true,
      date: new Date(), //账单时间
      expense: [], //支出类型
      income: [], //收入类型
      typeMap: typeMap,
    })
    const toggle = () => {
      state.show = !state.show
    }
    // 切换收入支出类型
    const changeType = (item) => {
      state.payType = item
    }
    // 选中时间
    const choseDay = (value) => {
      // console.log(value);
      state.date = value
    }
    onMounted(async () => {
      const { data: { list } } = await axios.get('/type/list')
      state.expense = list.filter(i => i.type === '1')
      state.income = list.filter(i => i.type === '2')
    })
    return {
      ...toRefs(state),
      toggle,
      changeType,
      choseDay
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