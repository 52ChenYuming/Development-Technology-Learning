// 防抖-在规定的时间内，没有触发第二次，则去执行

// 用闭包保存timer确保其不会销毁，重复点击会清理上一次的定时器，保证一定要过一秒才会执行请求，重复点击无效
// 要保存事件参数，事件参数在debounce里保存了，我们要给把事件参数e给执行函数，防止执行函数里需要事件参数
function debounce(fn, delay) {
  let timer = null;
  return function () {
    let arg = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arg);
    }, delay)
  }
}