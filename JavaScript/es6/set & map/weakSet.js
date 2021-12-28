// const ws = new WeakSet()
// ws.add(1)

// console.log(ws);




// let a = [[1, 2]]
// function foo() {
//   let ws = new WeakSet(a)
//   // .....
//   return ws
// }

// let bar = foo()
// a = null
// console.log(bar);



let a = 1
let arr = []
arr.push(a)
a = null
console.log(arr);


let b = [[1, 2]]
let ws = new WeakSet(b)
b = null
console.log(ws);