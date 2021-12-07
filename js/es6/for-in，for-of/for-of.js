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
forOf([1, 2, 3, 4, 5, 6, 7, 8, 9], (item) => {
  console.log(item);
})

[1, 2, 3].forEach(element => {
  console.log(element);
});