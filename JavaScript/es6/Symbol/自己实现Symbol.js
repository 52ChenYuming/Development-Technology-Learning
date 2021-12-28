// Symbol([description])

(function () {
  // 将root挂载在window环境下
  var root = this;
  var SymbolPolyfill = function Symbol(description) {
    // 如果Symbol被new 报错 
    if (this instanceof SymbolPolyfill) throw new TypeError('Symbol is not a constructor');
    //Symbol传入的参数是underfined就返回underfined，不是就返回toString后的参数
    var descString = description === undefined ? description : String(description);
    // 创建一个连隐式原型都没有的对象
    var symbol = Object.create(null);
    Object.defineProperties(symbol, {
      '__Description__': {
        value: descString,
        writable: false,
        enumerable: false,
        configurable: false
      }
    })
    return symbol
  }
  root.SymbolPolyfill = SymbolPolyfill;
})()

let a = SymbolPolyfill('123');
console.log(a);
let b = Symbol('123');
console.log(b);