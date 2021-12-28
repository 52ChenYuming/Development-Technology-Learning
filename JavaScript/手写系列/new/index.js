function Person(name) {
  this.name = name;
}
let p = new Person('小林');

// new 创建对象做的事情
// var this = {
//   name: name,
//   __proto__: Person.prototype
// }
//   this.name = name
// }