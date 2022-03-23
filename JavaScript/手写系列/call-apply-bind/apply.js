var b = {
  name: 'aa'
}
function a(e, ee) {
  console.log(this.name);
  return e + ee;
}
// a.apply(b, [1, 2]);

Function.prototype.myapply = function (context) {

  if (typeof this !== 'function') {
    throw new TypeError('Error');
  }

  context = context || window;

  context.fn = this; //b.fn = a;相当于往b对象中添加键值对属性fn:a()

  //  和apply的区别是只有一个参数，所以取出第二个参数就可以了(第二个参数是数组，需要将数组结构为一个个元素)
  let result = context.fn(...arguments[1]);

  delete context.fn;

  return result;
}

// 可以有返回值也可以没有返回值
let c = a.myapply(b, [1, 2]);
console.log(c, '-----------');//有返回值
a.myapply(b, [1, 2]);//无返回值