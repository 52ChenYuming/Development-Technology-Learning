const promise1 = new Promise((resolve,reject) => {
  console.log(1);
  // resolve('success')
  console.log(2);
})
promise1.then(() => {
  console.log(3);
})

console.log(4);