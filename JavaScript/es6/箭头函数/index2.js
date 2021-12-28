// function foo() {
//   return function (a) {
//     console.log(this.a);
//   }
// }

// var obj1 = {
//   a: 2
// }
// var obj2 = {
//   a: 3
// }
// var bar = foo.call(obj1)
// bar.call(obj2);

// // 打印结果是3

// function foo() {
//   return function (a) {
//     console.log(this.a);
//   }
// }

// var obj1 = {
//   a: 2
// }
// var obj2 = {
//   a: 3
// }
// var bar = foo.call(obj1)
// bar.call(obj2);
// // 箭头函数内部是没有this概念的，看到this关键字，也不是代表自己的作用域
// // 箭头函数中this代表的是该函数外层的function的作用域
// // console.log()打印结果是2

function foo() {
  setTimeout(function () {
    console.log(this.a);
  }, 100);
}
var obj = {
  a: 2
}
foo.call(obj);