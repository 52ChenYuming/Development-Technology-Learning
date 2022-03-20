function add(a,b) {
  return a+b
}
add(1,2)


var addCurry = curry(add)
addCurry(1)(2)  //3