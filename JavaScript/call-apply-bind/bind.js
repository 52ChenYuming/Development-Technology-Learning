var b = {
  name: 'aa'
}
function a(e, ee) {
  console.log(this.name);
  console.log(e + ee);
}

// let c = a.bind(b, 1, 2)
// c();


Function.prototype.mybind = function (context) {

  if (typeof this !== 'function') {

    throw new TypeError('Error');
  }
  // 保留调用mybind函数对象的this
  let _this = this;
  context = context || window;
  let args = [...arguments].slice(1);
  // bind执行会返回一个函数
  return function F() {
    // 把this代表的函数执行掉
    _this.apply(context, args.concat(...arguments))//如果参数不够，用后面赋予的

  }
}

let c = a.mybind(b, 1);
c(3, 4);