console.log('script start')
async function async1() {
  await async2()//会导致后面的代码去到下一次的微任务队列，但是谷歌v8引擎强行违反规定，将await后面的代码提上一个循环
  console.log('async1 end')
}
async function async2() {
  console.log('async2 end')
}
async1()
setTimeout(function () {
  console.log('setTimeout')
}, 0)
new Promise(resolve => {
  console.log('Promise')
  resolve()
})
  .then(function () {
    console.log('promise1')
  })
  .then(function () {
    console.log('promise2')
  })
console.log('script end')


// script start
// async2 end
// Promise   
// script end
// async1 end
// promise1
// promise2
// setTimeout