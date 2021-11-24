function foo() {
  var b = 2;
  this.bar();
}

function bar() {
  console.log(this.a);//underfined
}