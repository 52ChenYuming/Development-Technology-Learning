//通过require引入文件
// console.log('start require');
// require('./lib.js')
// console.log('end require');


let lib = require('./lib.js');
console.log(lib);//commonjs 中当一个初始状态的模块被引用后，它默认是一个空对象