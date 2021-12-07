# 原生迭代器原理
````javascript
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
````
# for-of详解

1. for of 遍历的是obj[Symbol.iterator]这个属性

2. 具有这个属性能被for-of遍历的有

   1. 数组
   2. Set
   3. Map
   4. 类数组（例如arguments属性）
   5. 字符串
   6. Generator对象

3. 自己实现一个for-of函数
````javascript
function forOf(obj, cb) {

  let iterable, result;

  // 如果传入对象Symbol.iterator属性类型不是function，抛出错误
  if (typeof obj[Symbol.iterator] !== "function") {
    throw new TypeError(result + 'is not iterable');
  }

  iterable = obj[Symbol.iterator]()
  result = iterable.next();

  while (!result.done) {
    cb(result.value)
    result = iterable.next();
  }
}
// 开始调用自己的forOf
forOf([1, 2, 3], (item) => {
  console.log(item);//1,2,3
})
````

4. 往数组添加可被for-of遍历的属性
  
     1. arr.name = 'e';//人为添加数组上面的属性，这个属性去不到Symbol.iterator属性上

     2. Array.prototype.d = 'f'//往原型添加也没有这个属性

     3. arr.push('d');//push方法可以

# for-in
1. 循环返回的是数据结构的键名
2. 遍历数组返回的是数组的下标
3. 不仅可以遍历已有的值，还可以遍历原型上的键，以及手动添加的键
4. 特殊情况下，遍历的顺序不会按照对象的属性进行

# for of
1. 不能遍历对象（没有Symbol.iterator属性的数据结构）
2. 遍历数组返回的是元素
