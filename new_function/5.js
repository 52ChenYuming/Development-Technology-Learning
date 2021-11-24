function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype = {
    say: function() {
        console.log('hello');
    },
    babk: function() {
        console.log('babk');
    }
}

function myNew(fu, ...args) {
    //arguments
    // console.log(arguments);
    let obj = Object.create(fn.prototype);
    //函数时傀儡，打工人
    fn.call(obj, ...args);
    return obj;
}
//new Person('陈委员',18)
let p1 = myNew(Person, '陈委员', 18);
console.log(Object.keys(p1), p1.__proto__);