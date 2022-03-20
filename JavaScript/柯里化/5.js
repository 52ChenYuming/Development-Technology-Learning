function sub_curry(fn) {
  var args = [].slice.call(arguments, 1) //拿到该有的参数
  return function () {
    // newArgs 一定代表的是 add 该有的完整的参数
    var newArgs = args.concat([...arguments])
    return fn.apply(this, newArgs)
  }
}


function curry(fn, length) {
  length = length || fn.length
  var slice = Array.prototype.slice

  return function () {
    if (arguments.length < length) {
      var combined = [fn].concat(slice.call(arguments))
    } else {
      return fn.apply(this, arguments)
    }
  }
}

var fn = curry(function (a, b, c) {
  return [a, b, c]
})

fn('a', 'b', 'c') //['a','b','c']
fn('a', 'b')('c') //['a','b','c']
fn('a')('b')('c') //['a','b','c']