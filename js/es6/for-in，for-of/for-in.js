const obj = {
  a: 1,
  b: 2,
  c: 3
}

// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// for (let key of Object.keys(obj)) {
//   console.log(key);
// }

const arr = ['a', 'b', 'c']
// arr.name = 'e';//人为添加数组上面的属性，这个属性去不到Symbol.iterator属性上
// Array.prototype.d = 'f'//往原型添加也没有这个属性
// arr.push('d');//push方法可以
// for (let i of arr) {
//   console.log(i);
// }

// for-in用来遍历对象中的key
// Object.prototype.d = '4';//往原型（例如Object，Array）上加的东西可以被for-in遍历到,这点要和for-of区分
obj.name = 'name';//这个也可以
// arr.name = 'name'
// for (let i in obj) {
//   console.log(i);
// }


function Foo() {
  this[100] = 'test-100'
  this[1] = 'test-1'
  this['b'] = 'test-b'
  this[50] = 'test-50'
  this[9] = 'test-9'
  this[8] = 'test-8'
  this[3] = 'test-3'
  this[5] = 'test-5'
  this['A'] = 'test-A'
  this['C'] = 'test-C'
}

let bar = new Foo();
for (let key in bar) {
  console.log(`index:${key} value:${bar[key]} `);
}
// 对象中的数字属性会被优先遍历，且按照顺序遍历
// ECMAScript 规范定义了【数字属性应该按照索引值的大小升序排列，字符串属性根据创建的时间顺序升序排列】
