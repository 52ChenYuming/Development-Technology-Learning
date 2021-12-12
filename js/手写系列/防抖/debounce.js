// 防抖-在规定的时间内，没有触发第二次，则去执行

// 用闭包保存timer确保其不会销毁，重复点击会清理上一次的定时器，保证一定要过一秒才会执行请求，重复点击无效
// 要保存事件参数，事件参数在debounce里保存了，我们要给把事件参数e给执行函数，防止执行函数里需要事件参数

// fn是你要调用的函数，delay是防抖的时间
function debounce(fn, delay) {
  // timer是一个定时器
  let timer = null;
  // 返回一个闭包函数，用闭包保存timer确保其不会销毁，重复点击会清理上一次的定时器
  return function () {
    // 保存事件参数，防止fn函数需要事件参数里的数据
    let arg = arguments;
    // 调用一次就清除上一次的定时器
    clearTimeout(timer);
    // 开启这一次的定时器
    timer = setTimeout(() => {
      // 若不改变this指向，则会指向fn定义环境
      fn.apply(this, arg);
    }, delay)
  }
}