//new 手写
function Person(name, age) {
    this.name = name;
    this.age = age;
    //return {}
}

Person.prototype.say = function() {
    console.log(this.age);
}

let p2 = new Person('黄亮', 17);
console.log(p2.__proto__);

p2 = new Person('赖总', 18);
console.log(Object.hasOwnProperty('name'), Object.hasOwnProperty('say'));
// p2.__proto__ object  -> Person.prototype
// JS是原型方式的面向对象
// p2的原型对象， 由默认objecrt 中间插入person.prototype


//大厂必考八股文题:手写new
//new Person()
//myNew(fn, ...args)为任何一个构造函数完成构造原型链的过程
//reset 运算符
function myNew(fn, ...args) {
    //Object.creaate
    let obj = Object.create(fn.prototype);
    console.log(obj, obj.__proto__, '---------------');
    console.log(...args, '--------------');
    // console.log(fn, args);
    //构造的过程   函数运行一下，并且this指向obj
    Person.call(obj, ...args);
    console.log(obj, '/////////');
    //原型的设置
    //返回对象
    return obj;

}
let p3 = myNew(Person, '俊严', 18);
console.log(p3);