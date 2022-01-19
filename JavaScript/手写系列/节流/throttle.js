// 在规定的时间只被触发一次
// 方法一：时间戳
function throttle(fn, delay = 1000) {
  // 记录上一次的调用时间
  var prev = null;
  // 返回闭包函数
  return function () {
    // 保存事件参数
    var args = arguments;
    // 记录现在调用的时间
    var now = Date.now();
    // console.log(now);
    // 如果间隔时间大于等于设置的节流时间
    if (now - prev >= delay) {
      // 执行函数
      fn.apply(this, args);
      // 将现在的时间设置为上一次执行时间
      prev = now;
    }
  };
}

// // 方法二：定时器
// function throttle(fn, delay) {
//   // 重置定时器
//   let timer = null;
//   // 返回闭包函数
//   return function () {
//     // 记录事件参数
//     let args = arguments;
//     // 如果定时器为空
//     if (!timer) {
//       // 开启定时器
//       timer = setTimeout(() => {
//         // 执行函数
//         fn.apply(this, args);
//         // 函数执行完毕后重置定时器
//         timer = null;
//       }, delay);
//     }
//   }
// }

// 方法三：时间戳 & 定时器
// function throttle(fn, delay) {
//   // 初始化定时器
//   let timer = null;
//   // 上一次调用时间
//   let prev = null;
//   // 返回闭包函数
//   return function () {
//     // 现在触发事件时间
//     let now = Date.now();
//     // 触发间隔是否大于delay
//     let remaining = delay - (now - prev);
//     // 保存事件参数
//     const args = arguments;
//     // 清除定时器
//     clearTimeout(timer);
//     // 如果间隔时间满足delay
//     if (remaining <= 0) {
//       // 调用fn，并且将现在的时间设置为上一次执行时间
//       fn.apply(this, args);
//       prev = Date.now();
//     } else {
//       // 否则，过了剩余时间执行最后一次fn
//       timer = setTimeout(() => {
//         fn.apply(this, args);
//       }, delay);
//     }
//   };
// }
