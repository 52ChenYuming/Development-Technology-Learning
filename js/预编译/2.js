// // var a; //window.a
// function test() {
//     a = 10; //如果不加var ，那这句话的意思就相当于window.a= 10；
// }
// test();
// console.log(a);



function fn(a) {
  console.log(a);

  var a = 123

  console.log(a);

  function a() { }

  console.log(a);

  var b = function () { }

  console.log(b);

  function d() { }
}
fn(1)


// AO:{
//     a:underfined 123 function a(){}  123,
//     b:underfined
//     d:function d(){}
// }