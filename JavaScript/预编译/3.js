function test(a, b) {
    console.log(a);
    c = 0;
    var c;
    a = 3;
    b = 2;
}


global = 100

function fn() {
    console.log(global);
    global = 200
    console.log(global);
    var global = 300
}
fn()
var global