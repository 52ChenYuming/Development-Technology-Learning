global = 100;
function fn() {
  console.log(global);
  global = 200;
  console.log(global);
  var global = 300;
}
fn();
var global;

// GO: {
//   global: undefined
//   fn: function() { }
// }

// AO: {
//   global: undefined
// }