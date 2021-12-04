let a = 'yes';
let b = 'yes';
let c = Symbol('yes');

// console.log(typeof c);
// console.log(typeof a);

// let s = new Symbol('yes');//会报错，symbol不能被new（TypeError: Symbol is not a constructor）

// console.log(c instanceof Symbol);//instanceof判断引用类型，所以判断为false，Symbol没有constructor构造器

// const obj = {
//   // toString() {
//   //   return 'abc';
//   // }
//   aaa() {
//     return 'abc';
//   }
// }
// 如果Symbol接收的参数是一个对象，就会调用该对象的toString方法,将其转为字符串，然后再生成一个Symbol值
// const sym = Symbol(obj);//传入的obj实际是 "{aaa() {return 'abc'}}"
// console.log(sym);

// let s1 = Symbol('1')
// let s2 = Symbol('1')

// // console.log(s1 == s2);//false

// let sym = Symbol('MySymbol');
// console.log(String(sym)); //'Symbol(My Symbol)'

// let obj = {
//   a: "1",
//   a: "2"
// }
// // console.log(obj.a);//2
// obj[sym] = 'hello';
// obj[sym] = 'world';
// console.log(obj);

let s1 = Symbol.for('foo');
// let s2 = Symbol.for('foo');
console.log(s1);
