// const s  = new Set()

// // console.log(s);

// Array.from([2, 3, 4, 5, 2, 2]).forEach(x => {
//   s.add(x)
// });
// // console.log(s);

// let arr = [1, 2, 3, 2, 1]
// let newArr = new Set(arr)
// console.log(newArr);


// let s = new Set([1, 2, 3, 4, 5, 5, 5]) // {1: 1, 2: 2, 3: 3, ...}
// s.add(6)
// s.delete(5)   // delete obj.name
// s.clear()
// let arr = ['a', 'b', 'c']

// console.log(s.entries());

// for (let item of s.entries()) {
//   console.log(item);
// }

// s.forEach((value, key) => {
//   console.log(value, key);
// })
// let newS = [...s]
// // newS.map((x) => {
// //   console.log(x);
// // })
// let biger = newS.filter((x) => {
//   return x > 2
// })
// console.log(biger);



let a = new Set([1, 2, 3])
let b = new Set([4, 3, 2])

let union = new Set([...a, ...b])
let intersect = new Set([...a].filter(x => b.has(x)))
let differnce = new Set([...a].filter(x => !b.has(x)))


let newA = [...a].map(val => val + 1)
for (let i of a.values()) {
  i = i + 1
}

console.log(a);