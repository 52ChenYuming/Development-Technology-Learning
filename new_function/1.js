//ES5构建类
// 1. 函数来构建类 函数名大写 传了参数(类构建)
function Person(name, age) {
    this.name = name;
    this.age = age;
    //return {}
}
//函数由prototype属性
// p1.__protp__ 私有属性 == Person.prototype
Person.prototype.say = function() {
    console.log(this.age);
};
//以new的方式来运行 this的指向由函数的运行方式来决定(类运行)
const p1 = new Person("冯浩洁", 18);
console.log(p1.name);
p1.say();
console.log(p1.__proto__ == Person.prototype);