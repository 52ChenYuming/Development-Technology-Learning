// let patt1 = new RegExp('hello');
// let patt2 = /hello/i;

//使用
// let pat = /my/
// let str = 'this is my code..';

// let arr = str.split(' ');

// console.log(arr);
// console.log(pat.test(str));

// let pat = /oh/;
// let msg = 'oh my god';

// console.log(pat.exec(msg));

// 正则表达式书写规范
// /pattern/attribute   attribute可以是：g(全局匹配) i(忽略大小写匹配)

// let str = 'Visited NanChang oh my world'
// let pat = /nanchang/i;
// let pat2 = /nanchang/gi

// // console.log(pat.test(str));
// console.log(pat2.test(str));

// let str = 'Visit W3School';
// let pat = /w3school/i
// console.log(str.search(pat));

// let str = '1 plus 2 equl 33';
// let pattern = /\d/g;   //[ '1', '2', '3', '3' ]
// let pattern = /\d+/g;  //[ '1', '2', '33' ]
// console.log(str.match(pattern));

let str = 'Hello zj! oh I am cym';
;
console.log(str.replace(/cym/, 'snake'));
