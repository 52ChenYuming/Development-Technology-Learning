function rotate1(arr, k) {
  const length = arr.length
  if(length ==0 || !k) {
    return arr
  }
  const step = Math.abs( k % length) //绝对步长

  for (let i = 0; i < k;i++ ){
    const n = arr.pop()
    arr.unshift(n) //数组是一个有序的数据结构， unshift非常慢
  }
  return arr
}