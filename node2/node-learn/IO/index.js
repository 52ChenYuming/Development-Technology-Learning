// glob可以帮我们递归获取到目录下的文件
const glob = require('glob');

// 阻塞式的I/O调用
// let result = null;

// console.time('glob');
// result = glob(__dirname + '/**/*');//   /**/*/是目录的通配符
// console.timeEnd('glob');

// console.log(result);


// 非阻塞式I/O调用
let result = null;
console.time('glob');
result = glob(__dirname + '/**/*', function (err, res) {
  result = res;
  console.log(result);
});
console.timeEnd('glob');
console.log(1 + 1);