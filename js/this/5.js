function foo() {
  console.log(this.a);
}
var a = 2;
var obj1 = {
  a: 2,
  obj2: obj2
}

var obj2 = {
  a: 4,
  foo: foo
}
obj1.foo();

