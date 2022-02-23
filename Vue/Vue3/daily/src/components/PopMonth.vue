<template>
  <van-popup v-model:show="show" position="bottom">
    <van-datetime-picker
      v-model="currentDate"
      type="year-month"
      title="选择年月"
      :formatter="formatter"
      @confirm="choseMonth"
      @cancel="toggle"
    />
  </van-popup>
</template>

<script>
import { ref } from "@vue/reactivity";
import dayjs from "dayjs"
export default {
  setup(props, ctx) {
    const show = ref(false)
    const currentDate = ref(new Date())
    const formatter = (type, val) => {
      if (type === 'year') {
        return `${val}年`
      }
      if (type === 'month') {
        return `${val}月`
      }
      return val;
    };

    const toggle = () => {
      show.value = !show.value
    }

    const choseMonth = (item) => {
      // console.log(dayjs(item).format('YYYY-MM'));
      currentDate.value = item
      show.value = false
      ctx.emit('select', dayjs(item).format('YYYY-MM'))
    }



    return {
      show,
      currentDate,
      formatter,
      toggle,
      choseMonth
    }
  }
}

</script>

<style>
</style>
