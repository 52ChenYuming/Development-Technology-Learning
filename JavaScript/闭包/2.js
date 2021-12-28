// GO: {
//   glob: undefined 100,
//   demo: undefined,
//   a: function a() {}
// }

function a() {

    function b() {
        var bbb = 234
        console.log(aaa); // 123  闭包
    }
    var aaa = 123
    return b // b 出生在 a 里面，但是被保存出去了

}
// aAO: {
//   aaa: undefined 123,
//   b: function b() {}
// }

// bAO: {
//   bbb: undefined 234
// }

var glob = 100
var demo = a() // aAO在函数执行完之后没有被销毁
demo()