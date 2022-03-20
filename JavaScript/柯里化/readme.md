# 柯里化
一种 将使用多个参数的函数 转换成一系列 使用一个参数的函数 的技术


curry: 参数复用，降低代码通用性，提高代码复用性
```javascript
function add(a,b) {
  return a+b
}
add(1,2)

var addCurry = curry(add)
addCurry(1)(2) //3
```