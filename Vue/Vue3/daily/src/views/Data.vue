<template>
  <div class="data">
    <div class="total">
      <div class="time" @click="monthToggle">
        <span>{{ state.currentMonth }}</span>
        <van-icon name="notes-o" />
      </div>
      <div class="title">共支出</div>
      <div class="expense">￥{{state.total_expense}}</div>
      <div class="income">共收入￥{{state.total_income}}</div>
    </div>
    <div class="structure">
      <div class="head">
        <span class="title">收支构成</span>
        <div class="tab">
          <span @click="changeTotalType('expense')" class="expense" :class="{'active': state.totalType == 'expense'}">支出</span>
          <span @click="changeTotalType('income')" class="income" :class="{'active': state.totalType == 'income'}">收入</span>
        </div>
      </div>
      <div class="content">
        <div 
          class="item" 
          v-for="item in state.totalType == 'expense' ? state.expense_data : state.income_data"
          :key="item.type_id"
        >
          <div class="left">
            <div class="type">
              <span :class="{'expense': state.totalType == 'expense', 'income': state.totalType == 'income'}">
                <van-icon :name="item.type_id ? state.typeMap[item.type_id].name : ''"></van-icon>
              </span>
              <span>{{item.type_name}}</span>
            </div>
            <div class="progress">{{((item.number / (state.totalType == 'expense' ? state.total_expense : state.total_income)) * 100).toFixed(2)}}%</div>
          </div>
          <div class="right">
            <div class="percent">
              <van-progress
                :percentage="((item.number / (state.totalType == 'expense' ? state.total_expense : state.total_income)) * 100)"
                stroke-width="6px"
                track-color="#ffffff"
                color="#39be77"
                :show-pivot="false"
              />
            </div>
            <div class="money">￥{{item.number.toFixed(2)}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="proportion">
      <div class="head">
        <span class="title">收支占比</span>
        <div class="tab">
          <span class="expense" @click="changePieType('expense')" :class="{'active': state.pieType == 'expense'}">支出</span>
          <span class="income" @click="changePieType('income')" :class="{'active': state.pieType == 'income'}">收入</span>
        </div>
      </div>
      <!-- echarts -->
      <div id="proportion"></div>
    </div>

    <PopMonth ref="popMonthRef" @select="selectMonth"/>
  </div>
</template>



<script setup>
import { onMounted, reactive, ref } from "@vue/runtime-core";
import PopMonth from "../components/PopMonth.vue";
// echarts
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components';
import { PieChart } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import dayjs from "dayjs";
import axios from "../utils/axios";
import { typeMap } from '../utils'

echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout
]);

const popMonthRef = ref(null)
const state = reactive({
  typeMap,
  currentMonth: dayjs().format('YYYY-MM'),
  totalType: 'expense',
  pieType: 'expense',
  total_expense: 0,
  total_income: 0,
  expense_data: [],
  income_data: []
})

// 绘制饼状图
const setPieChart = () => {
  const myChart = echarts.init(document.getElementById('proportion'))
  const _data = state.pieType == 'expense' ? state.expense_data : state.income_data
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/> {b} : {c} ({d}%)'
    },
    // 图例
    legend: {
      orient: 'horizontal'
    },
    series: [
      {
        name: state.pieType == 'expense' ? '支出' : '收入',
        type: 'pie',
        radius: '50%',
        data: _data.map(item => {
          return { value: item.number, name: item.type_name }
        }),
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  option && myChart.setOption(option);
}

onMounted(() => {
  getData()
})

const getData = async() => {
  const { data } = await axios.get(`/bill/data?date=${state.currentMonth}`)
  console.log(data);
  // 总收支
  state.total_expense = data.total_expense
  state.total_income = data.total_income

  // 过滤支出和收入
  state.expense_data = data.total_data.filter(item => item.pay_type == 1).sort((a, b) => b.number - a.number)
  state.income_data = data.total_data.filter(item => item.pay_type == 2).sort((a, b) => b.number - a.number)
  
  setPieChart()
}

// 打开月份选择器
const monthToggle = () => {
  popMonthRef.value.toggle()
}
const selectMonth = (item) => {
  // console.log(item);
  state.currentMonth = item
  getData()
}

const changeTotalType = (type) => {
  state.totalType = type
}
const changePieType = (type) => {
  state.pieType = type
  setPieChart()
}
</script>

<style lang="less" scoped>
@import url("../style/custom.less");
.data {
  min-height: 100%;
  background-color: #f5f5f5;
  .total {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 0;
    margin-bottom: 10px;
    .time {
      position: relative;
      width: 96px;
      padding: 6px;
      background-color: #f5f5f5;
      color: @color-text-base;
      border-radius: 4px;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      span:nth-of-type(1)::after {
        content: "";
        position: absolute;
        top: 9px;
        bottom: 8px;
        right: 28px;
        width: 1px;
        background-color: rgba(0, 0, 0, 0.5);
      }
      .van-icon-notes-o {
        font-size: 16px;
        color: @color-text-caption;
      }
    }
    .title {
      color: @primary;
      margin-bottom: 8px;
      font-size: 12px;
      font-weight: 500;
    }
    .expense {
      font-size: 24px;
      color: @primary;
      font-weight: 600;
      margin-bottom: 16px;
    }
    .income {
      color: @color-text-caption;
      font-weight: 500;
    }
  }
  .structure {
    padding: 0 16px;
    background-color: #fff;
    margin-bottom: 10px;
    .head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 0;
      .title {
        font-size: 18px;
        color: @color-text-base;
      }
      .tab {
        span {
          display: inline-block;
          width: 40px;
          height: 24px;
          background-color: #f5f5f5;
          text-align: center;
          line-height: 24px;
          margin-left: 10px;
          border-radius: 4px;
        }
        .expense {
          &.active {
            background-color: rgba(57, 190, 119, 0.2);
            color: @primary;
          }
        }
        .income {
          &.active {
            background-color: rgba(236, 190, 37, 0.2);
            color: @text-warning;
          }
        }
      }
    }
    .content {
      .item {
        display: flex;
        height: 50px;
        align-items: center;
        font-size: 12px;
        .left {
          flex: 4.3;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-right: 10px;
          .type {
            display: flex;
            align-items: center;
            span:nth-of-type(1) {
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 50%;
              width: 30px;
              height: 30px;
              margin-right: 10px;
              color: #fff;
            }
            .expense {
              background-color: @primary;
            }
            .income {
              background-color: @text-warning;
            }
          }
        }
        .right {
          flex: 8;
          display: flex;
          align-items: center;
          .percent {
            width: 160px;
          }
          .momey {
            width: 100px;
          }
        }
      }
    }
  }
  .proportion {
    background-color: #fff;
    padding: 12px;
    .head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 0;
      .title {
        font-size: 18px;
        color: @color-text-base;
      }
      .tab {
        span {
          display: inline-block;
          width: 40px;
          height: 24px;
          background-color: #f5f5f5;
          text-align: center;
          line-height: 24px;
          margin-left: 10px;
          border-radius: 4px;
        }
        .expense {
          &.active {
            background-color: rgba(57, 190, 119, 0.2);
            color: @primary;
          }
        }
        .income {
          &.active {
            background-color: rgba(236, 190, 37, 0.2);
            color: @text-warning;
          }
        }
      }
    }
    #proportion {
      width: 100%;
      height: 400px;
    }
  }
}
</style>