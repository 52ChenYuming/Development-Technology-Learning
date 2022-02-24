<template>
  <van-cell-group class="item">
    <div class="header-date">
      <div>{{ bill.date }}</div>
      <div class="money">
        <span>
          <b>支</b>
          {{ expense }}
        </span>
        <span>
          <b>收</b>
          {{ income }}
        </span>
      </div>
    </div>

    <van-cell
      :class="{ 'expense': item.pay_type == 1, 'income': item.pay_type == 2 }"
      v-for="item in bill.bills"
      :key="item.id"
      :title="item.type_name"
      :value="`${item.pay_type == 1 ? '-' : '+'}${item.amount}`"
      :label="`${$filters.transTime(item.date)} ${item.remark ? (' | ' + item.remark) : ''}`"
      @click="goToDetail(item)"
    />
  </van-cell-group>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
import { useRouter } from 'vue-router'
export default {
  props: {
    bill: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  setup(props) {
    const router = useRouter()
    const state = reactive({
      expense: 0,
      income: 0
    })

    const cal = () => {
      let expenseAmount = 0
      props.bill.bills.filter(i => i.pay_type == 1).forEach(item => {
        expenseAmount += Number(item.amount)
        state.expense = expenseAmount.toFixed(2)
      })
      let incomeAmount = 0
      props.bill.bills.filter(i => i.pay_type == 2).forEach((item) => {
        incomeAmount += Number(item.amount)
        state.income = incomeAmount.toFixed(2)
      })
    }
    cal()

    const goToDetail = (item) => {
      router.push({ path: '/detail', query: { id: item.id }})
    }

    return {
      ...toRefs(state),
      goToDetail
    }
  }
}
</script>

<style lang="less" scoped>
@import url("../style/custom.less");
.item {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  .header-date {
    height: 60px;
    display: flex;
    background-color: #f9f9f9;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    div {
      color: @color-text-base;
    }
    .money {
      span {
        margin-left: 20px;
        b {
          color: @color-text-caption;
          font-weight: normal;
          background-color: #f5f5f5;
          padding: 3px;
          margin-right: 2px;
        }
      }
    }
  }
}
</style>
<style lang="less">
@import url("../style/custom.less");
.expense {
  .van-cell__value {
    color: @color-text-base;
  }
}
.income {
  .van-cell__value {
    color: @text-warning;
  }
}
</style>
