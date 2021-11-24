function baz() {
  //调用的位置是调用栈的全局
  console.log('baz');
  bar();
}

function bar() {
  // 调用的位置是调用栈的baz->bar
  console.log('bar');
  foo()
}

function foo() {
  // 调用的位置是调用栈的baz->bar->foo
  console.log('foo');
}

baz();//baz调用