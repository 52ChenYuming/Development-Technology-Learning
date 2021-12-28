//函数作用域

// var fn = function() { //函数表达式

// }


// function bar() { //函数声明

// }
//全局环境window 标识符 气泡模型
var a = 10;
console.log(a);

function foo(a) {
    var b = 2;

    function bar() {
        console.log(4);
    }
    var c = 3;
}

foo(1);

console.log(a, b, c);