//为什么javascript代码会存在栈溢出？
// var a = 2;
// function add(b, c) {
//     var b = 10;
//     return b + c;
// }

// function addAll(b, c) {
//     var d = 10;
//     let result = add(b, c);
//     return a + result + d;
// }

// addAll(3, 6);


// function foo() {
//     var a = 1;
//     let b = 2;

//     {
//         let b = 3;
//         var c = 4;
//         let d = 5;
//         console.log(a);
//         console.log(b);
//     }
//     console.log(b);
//     console.log(c);
//     console.log(d);
// }
// foo()