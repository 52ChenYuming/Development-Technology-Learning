function test() {
    var count = 0;
    count++;
    console.log(count);
}



test()
test()
test()
test()

// 不依赖外部变量，实现累加
// 很难实现， 难在函数中没有一个固定不变的变量， 每次重新执行函数都会初始化函数中的内容

function add() {
    var num = 10

    function a() {
        console.log(++num);
    }
    return a;
}
var res = add();

res()
res()
res()
res()