// 修改前
// function test() {
//     var arr = [];
//     for (var i = 0; i < 10; i++) {
//         arr[i] = function () {
//             console.log(i);
//         }
//     }
//     return arr;
// }

// var myArr = test();  // [function(){}, ...]
// // myArr[0]()

// for (var j = 0; j < 10; j++) {
//     myArr[j]()
// }








function test() {
  var arr = []
  for (var i = 0; i < 10; i++) {

    (function (j) {
      // var j = i
      arr[j] = function () {
        console.log(j);
      }
    })(i)

  }
  return arr
}



var myArr = test() // [function(){}, ...]
// myArr[0]()
// myArr[1]()
for (var j = 0; j < 10; j++) {
  myArr[j]()
}



// !function() {

// }{}