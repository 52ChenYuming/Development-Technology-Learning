const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function myPromised(fn) {
  const that = this
  const promise2 = null
  that.state = PENDING
  that.value = null //存放resolve()内部的参数
  that.resolvedCallbacks = [] //then里面的回调函数
  that.rejectedCallbacks = [] //catch里面的回调


  function resolve(value) {
    if (value instanceof myPromised) {
      return value.then(resolve, reject)
    }
    setTimeout(() => {
      if (that.state === PENDING) {
        that.state = RESOLVED
        that.value = value
        that.resolvedCallbacks.map(cb => cb(that.value))
      }
    }, 0)
  }

  function reject() {
    setTimeout(() => {
      if (that.state === PENDING) {
        that.state = REJECTED
        // 这里可以调用同一个value的原因是，Promise的状态一经变更就不能修改，上面判断状态都不会成功，不会触发if
        that.value = value
        that.rejectedCallbacks.map(cb => cb(that.value))
      }
    }, 0)
  }

  try {
    fn(resolve, reject)
  } catch (error) {
    reject(error)
  }

}

myPromised.prototype.then = function (onFufilled, onRejected) {
  const that = this
  const promise2 = null
  onFufilled = typeof onFufilled === 'function' ? onFufilled : v
  onRejected = typeof onRejected === 'function' ? onRejected : r => {
    throw r
  }
  if (that.state === PENDING) {
    return (promise2 = new myPromised((resolve,reject) => {
      that.resolvedCallbacks.push(() => {
        try {
          const x = onFufilled(that.value)
          resolutionProcedure(promise2,x,resolve,reject)
        } catch (error) { 
          reject(error)
        }
      })

      that.rejectedCallbacks.push(() => {
        try {
          const x = onRejected(that.value)
          resolutionProcedure(promise2,x,resolve,reject)
        } catch (error) { 
          reject(error)
        }
      })
      
    }))
    that.resolvedCallbacks.push(onFufilled)
    that.rejectedCallbacks.push(onRejected)
  }
  if (that.state === RESOLVED) {
    onFufilled(that.value)
  }
  if (that.state === REJECTED) {
    onRejected(that.value)
  }
}