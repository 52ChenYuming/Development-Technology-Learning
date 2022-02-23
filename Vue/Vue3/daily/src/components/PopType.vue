<template>
  <van-popup v-model:show="show" round position="bottom">
    <div class="pop">
      <div class="header">
        <van-icon name="cross" @click="toggle" class="cross" />请选择类型
      </div>

      <div class="content">
        <div :class="{ all: true, active: active == 'all' }" @click="choseType({ id: 'all' })">全部类型</div>
        <div class="title">支出</div>
        <div class="expense-wrap">
          <p
            v-for="item in expense"
            :key="item.id"
            :class="{ active: active == item.id }"
            @click="choseType(item)"
          >{{ item.name }}</p>
        </div>
        <div class="title">收入</div>
        <div class="income-wrap">
          <p
            v-for="item in income"
            :key="item.id"
            :class="{ active: active == item.id }"
            @click="choseType(item)"
          >{{ item.name }}</p>
        </div>
      </div>
    </div>
  </van-popup>
</template>



<script >
import axios from '../utils/axios'
import { onMounted, reactive, toRefs } from "vue"


export default {

  setup(props,ctx) {
    const state = reactive({
      show: false,
      active: '全部类型',
      expense: [],
      income: []
    })
    const toggle = () => {
      state.show = !state.show
    }
    const choseType = (item) => {
      state.active = item.id
      // state.show = false  
      ctx.emit('select',item)
    }

    onMounted(async () => {
      const { data: { list } } = await axios.get('/type/list')
      console.log(list);
      state.expense = list.filter(i => i.type === '1')
      state.income = list.filter(i => i.type === '2')
    })
    return {
      ...toRefs(state),
      toggle,
      choseType
    }
  }

}


</script>



<style lang="less" scoped>
@import url("../style/custom.less");
.pop {
  position: relative;
  background-color: #f5f5f5;
  .header {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 56px;
    text-align: center;
    font-size: 14px;
    line-height: 56px;
    color: @color-text-base;
    background-color: #fff;
    .cross {
      position: absolute;
      left: 10px;
      top: 50%;
      font-size: 20px;
      transform: translateY(-50%);
      color: @color-text-secondary;
    }
  }
  .content {
    padding: 20px;
    .all {
      display: inline-block;
      padding: 12px 20px;
      font-size: 16px;
      color: @color-text-base;
      background-color: #fff;
    }
    .title {
      color: @color-text-caption;
      margin: 10px 0;
      font-size: 14px;
    }
    .expense-wrap,
    .income-wrap {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      p {
        width: calc(~"(100% - 20px) / 3");
        text-align: center;
        padding: 12px 0;
        margin-bottom: 10px;
        background-color: #fff;
        font-size: 16px;
      }
    }
    .active {
      background-color: @primary!important;
      color: #fff;
    }
  }
}
</style>