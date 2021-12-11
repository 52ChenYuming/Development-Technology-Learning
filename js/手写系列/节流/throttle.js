// 在规定的时间只被触发一次
// 方法一：时间戳
function throttle(fn, delay = 1000) {
  var prev = Date.now();
  return function () {
    var args = arguments;
    var now = Date.now();
    if (now - prev >= delay) {
      fn.apply(this, args);
      prev = Date.now();
    }
  }
}

// 方法二：定时器
