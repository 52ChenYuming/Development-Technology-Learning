function calc(n1: number, n2: number, fn: (num1: number,num2: number) => Number) {
  return fn(n1,n2)
}

const result1 = calc(20, 30, function(a1,a2) {
  return a1+a2
})
console.log(result1)