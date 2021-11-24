let obj = {
    say: function() {
        console.log('say you say me!');
    }
}
let o = {}; // o 怎么拿到obj上的方法
o.__proto__ = obj;
// console.log(o.say);
console.log(o.hasOwnProperty('a'), o.hasOwnProperty('say'));

//返回一个以参数为原型对象的空对象
let o = Object.create(obj);
console.log(o, o.__proto__);