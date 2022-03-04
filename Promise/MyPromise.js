class MyPromise {
  state = 'pending' // 状态 ,pending resolved rejected
  value = undefined //成功后的值
  reason = undefined //失败后的原因

  resolveCallbacks = [] // 当pending状态，存储成功的回调
  rejectedCallbacks = [] //当pending状态，存储失败的回调

  constructor(fn) {
    const resolveHandler = (value) => {
      if (this.state === 'pending') {
        this.state = 'resolved'
        this.value = value
        this.resolveCallbacks.forEach(fn => fn(this.value))
      }
    }
    const rejectHandler = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected'
        this.reason = reason
        this.rejectedCallbacks.forEach(fn => fn(this.reason))
      }
    }

    try {
      fn(resolveHandler, rejectHandler)
    } catch (err) {
      rejectHandler(err)
    }
  }
  // 当 pending 状态下，fn1 和 fn2 会被存储到 callbacks 中
  then(fn1, fn2) {
    fn1 = typeof fn1 === 'function' ? fn1 : (v) => v
    fn2 = typeof fn2 === 'function' ? fn2 : (e) => e

    if (this.state === 'pending') {
      const p1 = new MyPromise((resolve,reject) => {
        this.resolveCallbacks.push(() => {
          try {
            const newValue = fn1(this.value)
            resolve(newValue)
          } catch (err) {
            reject(err)
          }
        })
        this.rejectedCallbacks.push(() => {
          try {
            const newValue = fn2(this.reason)
            reject(newValue) //p1.reason
          } catch (err) {
            reject(err)
          }
        })
      })
      return p1
    }

    if (this.state === 'resolved') {
      const p1 = new MyPromise((resolve, reject) => {
        try {
          const newValue = fn1(this.value)
          resolve(newValue)
        } catch (err) {
          reject(err)
        }
      })
      return p1
    }

    if (this.state === 'rejected') {
      const p1 = new MyPromise((resolve, reject) => {
        try {
          const newReason = fn2(this.reason)
          resolve(newReason)
        } catch (err) {
          reject(err)
        }
      })
      return p1
    }

  }
  // catch是then的一个语法糖
  catch(fn) {

  }
}