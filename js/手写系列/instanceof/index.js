let a = { name: '冯总' }
let b = [1, 2, 3]
// console.log(a instanceof Object);
// console.log(b instanceof Object);

function instance_of(left, right) {
  let leftVal = left.__proto__;
  let rightVal = right.prototype;
  while (true) {
    if (leftVal === null) return false;
    if (leftVal === rightVal) return true;
    leftVal = leftVal.__proto__;
  }
}

console.log(instance_of(b, Object));