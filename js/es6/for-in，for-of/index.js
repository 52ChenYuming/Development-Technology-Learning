var names = ['叶老板', '强哥', '国强'];
for (let index = 0; index < names.length; index++) {
  console.log(names[index]);
}

function createIterator(items) {
  var i = 0;
  return {
    next: function () {
      var done = i >= items.length;
      i++;
      return {
        done: false,
        value: 1
      }
    }
  }
}
var iterator = createIterator([1, 2, 3]);