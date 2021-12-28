// function getJson() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('json');
//       resolve('ok');//promise生效
//     }, 500)
//   })
// }
// getJson().then(() => {//注意.then里面只能接收函数
//   console.log('数据已经拿到了')
// });

function getJson() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('json');
      resolve('ok');//promise生效
    }, 500)
  })
}
// async表示当前这个函数内部可以存在异步
async function testAsync() {
  await getJson();// 加了await的代码会立即执行，且后面的代码会被阻塞（await不可以凭空单独出现，只能在async后出现）
  console.log('数据已经拿到了');
}
testAsync()