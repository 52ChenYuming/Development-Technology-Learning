// // 异步发展史

// // 1.回调
// function foo() {
//   setTimeout(() => {
//     console.log('foo');
//   }, 1000)
//   // bar() 回调
// }
// function bar() {
//   console.log('bar');
// }
// foo()

// 2.promise

// function foo() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('foo');
//       resolve('ok');
//     }, 1000)
//   })
// }

// function bar() {
//   console.log('bar');
// }
// foo().then(bar);

// 3.generator
// 所有Generator函数都会返回一个迭代器对象，该对象中具备一个next函数

// function* test() {
//   let a = yield 1 + 2;
//   let b = yield a * 3;
//   let c = yield b + 10;
// }
// let res = test();//generator函数执行后返回的是一个生成器对象:Object [Generator] {}
// let val1 = res.next();// { value: 3, done: false }
// let val2 = res.next(val1.value)// { value: 9, done: false }
// let val3 = res.next(val2.value)// { value: 19, done: false }
// let val4 = res.next(val3.value)// { value: undefined, done: true }

// 4.async-await
var fetch = require('node-fetch')

var fetchData = async function () {
  var r1 = await fetch('https://api.github.com/users/github');
  console.log(r1);
  var json1 = await r1.json();
  // console.log(json1);
  // console.log(json1.bio); 
}
fetchData();