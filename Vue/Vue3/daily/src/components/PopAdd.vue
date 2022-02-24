<template>
  <van-popup v-model:show="show" round position="bottom">
    <div class="add-wrap">
      <div class="header">
        <span class="close" @click="toggle">
          <van-icon name="cross" />
        </span>
        <van-button class="add-btn" size="small" type="success" @click="addBill">确定</van-button>
      </div>

      <div class="filter">
        <div class="type">
          <span
            @click="changeType('expense')"
            :class="{ expense: true, active: payType == 'expense' }"
          >支出</span>
          <span
            @click="changeType('income')"
            :class="{ income: true, active: payType == 'income' }"
          >收入</span>
        </div>
        <div class="time" @click="showDay = true">
          {{ $filters.transDay(date) }}
          <i class="iconfont icon-down"></i>
        </div>
      </div>

      <div class="money">
        <span class="sufix">￥</span>
        <span class="amount animation">{{ amount }}</span>
      </div>

      <div class="type-wrap">
        <!-- 支出 -->
        <div class="type-body" v-if="payType == 'expense'">
          <div class="type-item" v-for="item in expense" :key="item" @click="choseType(item)">
            <span class="iconfont-wrap expense" :class="{ 'active': currentType.id == item.id }">
              <van-icon :name="typeMap[item.id].name" />
            </span>
            <span>{{ item.name }}</span>
          </div>
        </div>
        <!-- 收入 -->
        <div class="type-body" v-else>
          <div class="type-item" v-for="item in income" :key="item" @click="choseType(item)">
            <span class="iconfont-wrap expense" :class="{ 'active': currentType.id == item.id }">
              <van-icon :name="typeMap[item.id].name" />
            </span>
            <span>{{ item.name }}</span>
          </div>
        </div>
      </div>

      <div class="remark" @click="remarkVisible = true" v-if="remark">{{ remark }}</div>
      <div class="remark" @click="remarkVisible = true" v-else>添加备注</div>

      <van-number-keyboard :show="true" extra-key="." @input="onInput" @delete="onDelete" />
    </div>
    <!-- 选择时间 -->
    <van-popup v-model:show="showDay" round position="bottom" :style="{ height: '46%' }">
      <van-datetime-picker
        v-model="date"
        type="date"
        title="选择时间"
        @confirm="choseDay"
        @cancel="showDay = false"
      />
    </van-popup>
    <!-- 备注 -->
    <van-dialog v-model:show="remarkVisible" title="备注" show-cancel-button>
      <van-field
        v-model="remark"
        label="备注"
        placeholder="请输入备注"
        maxlength="10"
        type="textarea"
        show-word-limit
      />
    </van-dialog>
  </van-popup>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import axios from '../utils/axios'
import { typeMap } from '../utils'
import dayjs from 'dayjs'
import { Toast } from 'vant'
export default {
  props: {
    detail: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  setup(props, ctx) {
    const state = reactive({
      show: false,
      payType: 'expense', // 账单类型
      showDay: false,
      date: new Date(), // 账单时间
      expense: [], // 支出的类型
      income: [], // 收入的类型
      typeMap: typeMap,
      currentType: { id: 1, name: '餐饮', type: '1', user_id: 0 }, // 花销的类型
      remarkVisible: false,
      remark: '', // 备注
      amount: '' // 金额
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
      state.showDay = false
    }

    onMounted(async () => {
      const { data: { list } } = await axios.get('/type/list')
      state.expense = list.filter(i => i.type === '1')
      state.income = list.filter(i => i.type === '2')
      // console.log(state.expense, state.income);
    })

    // 选择花销的类型
    const choseType = (item) => {
      // console.log(item);
      state.currentType = item
    }

    // 键盘输入
    const onInput = (value) => {
      console.log(value);
      if (value == '.' && state.amount.includes('.')) return
      // 有小数情况，只保留两位
      if (value !== '.' && state.amount.includes('.') && state.amount && state.amount.split('.')[1].length >= 2) return
      state.amount += value
    }
    const onDelete = () => {
      state.amount = state.amount.slice(0, state.amount.length - 1)
    }

    // 添加账单
    const addBill = async () => {
      if (!state.amount) {
        Toast.fail('请输入金额')
        return
      }
      const params = {
        amount: Number(state.amount).toFixed(2),
        type_id: state.currentType.id,
        type_name: state.currentType.name,
        date: dayjs(state.date).unix() * 1000,
        pay_type: state.payType == 'expense' ? 1 : 2,
        remark: state.remark || ''
      }
      const result = await axios.post('/bill/add', params)
      console.log(result);
      state.show = false
      state.remark = ''
      state.payType = 'expense'
      state.currentType = state.expense[0]
      state.date = new Date()
      state.amount = ''
      Toast.success('添加成功')
      ctx.emit('refresh')
    }

    return {
      ...toRefs(state),
      toggle,
      changeType,
      choseDay,
      choseType,
      onInput,
      onDelete,
      addBill
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