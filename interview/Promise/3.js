const promise1 = new Promise((resolve,reject) => {
  console.log('Promise1');
  resolve('resolve1')
})

const promise2 = promise1.then(res => {
  console.log(res);
})

console.log(1,promise1);
console.log(2,promise2);

// Promise1 => 1,promise1(resolve) => 2,promise2(pending) => resolve1