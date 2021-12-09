function* helloWorldGenterator() {
  yield 'hello'
  yield 'world'
  return 'ending'
}
var hw = helloWorldGenterator()

// helloWorldGenterator函数的执行 其实就是内部的 wrap 函数的执行
// wrap 函数返回一个 genterator 对象，该对象 的原型 是继承于 genFun.prototype
// genFun.prototype 是继承于 Gp，Gp是迭代器对象，具有next方法

// hw.next()
// generator._invoke = makeInvokeMethod(innerFn, self, context);

// innerFn
// function helloWorldGenterator$(_context) {
//   while (1) {
//     switch (_context.prev = _context.next) {
//       case 0:
//         _context.next = 2;
//         return 'hello';

//       case 2:
//         _context.next = 4;
//         return 'world';

//       case 4:
//         return _context.abrupt("return", 'ending');

//       case 5:
//       case "end":
//         return _context.stop();
//     }
//   }
// }


console.log(hw.next());
console.log(hw.next());
console.log(hw.next());

// this._invoke('next', undefined);

// _context.abrupt("return", 'ending');

// _context.next === end

console.log(hw.next());

// stop() 函数调用 因为没有参数， this.rval = undefined