// 1.call()
// var a = {
//   user: '嘉俊',
//   fn: function (e, ee) {
//     console.log(this.user);
//     console.log(e + ee);
//   }
// }
// var b = a.fn;
// // b();
// b.call(a, 1, 2);


// 2.apply()
// var a = {
//   user: '嘉俊',
//   fn: function (e, ee) {
//     console.log(this.user);
//     console.log(e + ee);
//   }
// }
// var b = a.fn;
// b.apply(a, [12, 11]);//传参要用数组形式

// 3.bind()
var a = {
  user: '嘉俊',
  fn: function (e, ee) {
    console.log(this.user);
    console.log(e + ee);
  }
}
var b = a.fn;
var c = b.bind(a, 1, 2);//bind是有返回值的,参数优先bind函数里面的，就近原则
c(3, 4);