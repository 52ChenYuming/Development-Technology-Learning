// Person.prototype  --原型
// Person.prototype  是一个对象

Person.prototype.name = '启明';
Person.prototype.say() = function () {
  console.log('hahahahaha');
}

function Person() {
  this.name = '昭君';
}


var person = new Person();
var person2 = new Person();


//他定义了构造函数制造出来的对象的公共祖先
console.log(person);
person.say();