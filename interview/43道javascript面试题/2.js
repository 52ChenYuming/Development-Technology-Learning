// 2. 输出是什么？
// 3 3 3
// 解释：setTimeout是异步代码，会在同步代码执行完后执行
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
// 0 1 2
// 解释：let会产生块级作用域，每一个块级作用域是独立的
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
