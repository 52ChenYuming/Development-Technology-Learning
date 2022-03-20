var curry = function (fn) {
  var args = [].slice.call(arguments, 1) //拿到该有的参数
  return function () {
    // newArgs 一定代表的是 add 该有的完整的参数
    var newArgs = args.concat([...arguments])
    return fn.apply(this, newArgs)
  }
}

function add(a, b) {
  return a + b
}

var addCurry = curry(add)
addCurry(1, 2) 

var addCurry = curry(add, 1, 2)
addCurry()

var addCurry = curry(add, 1)
addCurry(2)