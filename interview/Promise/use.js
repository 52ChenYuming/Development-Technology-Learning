const promise = new Promise((resolve, reject) => {
  // 状态是不可逆的
  reject('err')
  resolve('success')
})

promise.then(
  res => {
    console.log(res);
  },

  err => {
    console.log(err);
  }
)

// promise.catch(res => {
  
// })