function test() {
    console.log(b);
    if (a) {
        var b = 100
    }
    c = 234
    console.log(c);
}
var a;
test()
a = 10
console.log(c);