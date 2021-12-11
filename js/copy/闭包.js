// 闭包
function foo() {
  var myName = '乐乐'
  let test1 = 1
  let test2 = 2
  var innerBar = {
    setName: function (newName) {
      myName = newName
    },
    getName: function () {
      console.log(test1);
      return myName
    }
  }
  return innerBar
}
var bar = foo()
bar.setName('老汪')

console.log(bar.getName());