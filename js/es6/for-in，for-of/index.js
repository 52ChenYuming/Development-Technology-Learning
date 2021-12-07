var names = ['叶老板', '强哥', '国强'];
for (let index = 0; index < names.length; index++) {
  // console.log(names[index]);
}

// 原生迭代器原理
function createIterator(items) {
  var i = 0;
  return {
    next: function () {
      var done = i >= items.length;
      var val = !done ? items[i++] : undefined;
      return {
        done: done,
        value: val
      }
    }
  }
}
// var iterator = createIterator([1, 2, 3]);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator);

// 能遍历的数据结构都具备一个属性[Symbol.iterator]

let obj = {
  val: 1,
}

obj[Symbol.iterator] = function () {
  return createIterator([1, 2, 3]);
}

for (const value of obj) {
  console.log(value);
}


// for of 遍历的是obj[Symbol.iterator]这个属性