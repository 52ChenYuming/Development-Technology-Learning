const tradingPeriod = () => {
  // 抽象出一个函数，获取当前时间
  const now = getCurrentTime()
  // 初始化剩余多少小时
  let leftHour = 0
  // 初始化剩余多少分钟
  let leftMin = 0
  // 计算今日过了多少分钟
  let pastMin = now.hour * 60 + now.minutes
  // 在周日
  if (now.week === 7) {
    if (now.minutes > 0) {
      leftHour = 32 - now.hour
      leftMin = 60 - now.minutes
    } else {
      leftHour = 33 - now.hour
    }
    return `${leftHour}小时${leftMin}分钟`
  }
  // 在周六 ，时间不在0点到2点半
  else if (now.week === 6 && pastMin > 150) {
    if (now.minutes > 0) {
      leftHour = 32 - now.hour
      leftMin = 60 - now.minutes
    } else {
      leftHour = 33 - now.hour
    }
    return `${leftHour}小时${leftMin}分钟`
  }
  // 在周一，但是时间在凌晨
  else if (now.week === 1 && pastMin < 150) {
    if (now.minutes > 0) {
      leftHour = 8 - now.hour
      leftMin = 60 - now.minutes
    } else {
      leftHour = 9 - now.hour
    }
    return `${leftHour}小时${leftMin}分钟`
  }
  // 第一和第二交易时间段之间
  else if (150 < pastMin && pastMin < 540) {

    if (now.minutes > 0) {
      leftHour = 8 - now.hour
      leftMin = 60 - now.minutes
    } else {
      leftHour = 9 - now.hour
    }
    return `${leftHour}小时${leftMin}分钟`
  }
  // 第二和第三交易时间段之间
  else if (615 < pastMin && pastMin < 630) {
    leftMin = 30 - now.minutes
    return `${leftHour}小时${leftMin}分钟`
  }

  // 第三和第四交易时间段之间
  else if (690 < pastMin && pastMin < 810) {
    if (now.minutes != 30 && now.minutes < 30) {
      leftHour = 12 - now.hour
      leftMin = 30 - now.minutes
    } else if (now.minutes != 30 && now.minutes > 30) {
      leftHour = 13 - now.hour + 1
      leftMin = 90 - now.minutes
    } else {
      leftHour = 13 - now.hour
    }
    return `${leftHour}小时${leftMin}分钟`
  }
  // 第四和第五交易时间段之间
  else if (900 < pastMin && pastMin < 1260) {
    if (now.minutes > 0) {
      leftHour = 21 - now.hour
      leftMin = 60 - now.minutes
    } else {
      leftHour = 20 - now.hour
    }
    return `${leftHour}小时${leftMin}分钟`
  } else { // 在规定时间内
    return `在规定时间内`
  }

}

// 获取当前时间函数
const getCurrentTime = () => {
  const date = new Date()
  const now = {
    week: date.getDay(), // 周几
    hour: date.getHours(), // 几点
    minutes: date.getMinutes() // 几分
  }
  return now
}
// 测试打印
console.log(tradingPeriod());