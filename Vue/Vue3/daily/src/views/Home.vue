<template>
  <div class="home">
    <div class="header">
      <div class="type-wrap" @click="toggle">
        <span class="title">{{ state.currentSelect.name || '全部类型' }}</span>
        <i class="iconfont icon-type"></i>
      </div>
      <div class="data-wrap">
        <span class="time" @click="monthToggle">{{state.currentTime}}<i class="iconfont icon-down"></i>
        </span>
        <span class="expense">总支出￥{{state.totalExpense}}</span>
        <span class="income">总收入￥{{state.totalIncome}}</span>
      </div>
    </div>
    <div class="content-wrap">
      <van-pull-refresh v-model="state.refreshing" @refresh="onRefresh">
        <van-list
          v-model:loading="state.loading"
          :finished="state.finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <CardItem v-for="(item, index) in state.list" :key="index" :bill="item"/>
        </van-list>
      </van-pull-refresh>
    </div>
    <!-- 添加账单 -->
    <div class="add" @click="addToggle">
      <van-icon name="records" />
    </div>
    <!-- 类型弹框 -->
    <PopType ref="popRef" @select="select"></PopType>
    <PopMonth ref="popMonthRef" @select="selectMonth"></PopMonth>
    <PopAdd ref="popAddRef" @refresh="onRefresh"></PopAdd>
  </div>
</template>

<script setup>
import { reactive, ref } from '@vue/reactivity';
import PopType from '../components/PopType.vue';
import PopMonth from '../components/PopMonth.vue';
import CardItem from '../components/CardItem.vue'
import PopAdd from '../components/PopAdd.vue'
import dayjs from 'dayjs'
import axios from '../utils/axios'

const state = reactive({
  currentSelect: {},
  currentTime: dayjs(new Date()).format('YYYY-MM'),
  loading: false,
  finished: false,
  refreshing: false,
  page: 1,
  list: [],
  totalExpense: 0,
  totalIncome: 0,
  totalPage: 1
})

const popRef = ref(null)
const popMonthRef = ref(null)
const popAddRef = ref(null)
// 类型弹窗
const toggle = () => {
  popRef.value.toggle()
}

const select = (item) => {
  // console.log(item, '-----');
  state.currentSelect = item
}
// 年月的弹窗
const monthToggle = () => {
  popMonthRef.value.toggle()
}

const selectMonth = (item) => {
  // console.log(item);
  state.currentTime = item
}

// 加载列表数据
const onLoad = () => {
  getBillList()
}
// 下拉刷新
const onRefresh = () => {
  state.finished = false
  state.page = 1
  state.refreshing = true
  onLoad()
}

// 添加账单
const addToggle = () => {
  popAddRef.value.toggle()
}

// 获取账单列表
const getBillList = async() => {
  const { data } = await axios.get(`/bill/list?date=${state.currentTime}&type_id=${state.currentSelect.id || 'all'}&page=${state.page}&page_size=5`)
  console.log(data);
  if (state.refreshing) {
    state.list = []
    state.refreshing = false
  }
  state.list = state.list.concat(data.list)
  state.totalExpense = data.totalExpense.toFixed(2)
  state.totalIncome = data.totalIncome.toFixed(2)
  state.totalPage = data.totalPage
  if (state.page >= state.totalPage) state.finished = true
}

</script>

<style lang="less" scoped>
@import url("../style/custom.less");
.home {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  .header {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 80px;
    background-color: @primary;
    color: #fff;
    font-size: 14px;
    padding: 20px 20px;
    z-index: 100;
    box-sizing: border-box;
    .type-wrap {
      background-color: #50ca84;
      display: inline-block;
      padding: 6px;
      border-radius: 4px;
      position: relative;
      align-self: baseline;
      .title {
        margin-right: 22px;
      }
      .title::after {
        content: "";
        position: absolute;
        top: 12px;
        bottom: 11px;
        right: 32px;
        width: 1px;
        background-color: #e9e9e9;
      }
    }
    .data-wrap {
      margin-top: 10px;
      font-size: 13px;
      display: flex;
      align-items: center;
      .time {
        margin-right: 12px;
        .icon-down {
          font-size: 12px;
        }
      }
      .expense {
        margin-right: 10px;
      }
    }
  }
  .content-wrap {
    height: calc(~"(100% - 50px)");
    overflow: hidden;
    overflow-y: scroll;
    background-color: #f5f5f5;
    padding: 10px;
    // padding-bottom: 50px;
  }
  .add {
    position: fixed;
    bottom: 100px;
    right: 30px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #e9e9e9;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    background-color: #fff;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    color: @primary;
  }
}
</style>