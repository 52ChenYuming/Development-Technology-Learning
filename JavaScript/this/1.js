function indentify() {
  return this.name.toUpperCase()
}
function speak() {
  var greeting = "hello,I'm " + indentify.call(me);
  console.log(greeting);
}
var me = {
  name: 'wn'
}
var you = {
  name: 'zj'
}
let result = indentify.call(me);
let result2 = indentify.call(you);

// console.log(result);
speak.call(me);