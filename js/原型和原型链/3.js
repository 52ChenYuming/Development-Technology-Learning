Person.prototype.lastName = '曹';

function Person(name) {
  this.name = name;
}

var person = new Person('老板');

// console.log(person.lastName);


//改
// person.lastName = 'chen';
// console.log(person.lastName);//自己对象中新增lastName，并不能修改原型上的属性


//删
delete person.lastName;
// console.log(person.lastName);




function Bus() {
  constructor: Bus;
}
function Car() {

}

var car = new Car();

console.log(car.constructor);

//constructor指向Car(),为了让Car()这个函数构造出来的所有的对象想要找到它的构造器的时候能得到