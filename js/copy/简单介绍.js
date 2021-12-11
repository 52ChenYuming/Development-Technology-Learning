// let a = 1;
// let b = a;
// a = 2;
// console.log(b);

// 不受原数据影响的赋值操作，就叫深拷贝

let a = { age: 1 };
let b = a;
a.age = 2;

console.log(b);

// 作用域 闭包 原型 this 深浅拷贝