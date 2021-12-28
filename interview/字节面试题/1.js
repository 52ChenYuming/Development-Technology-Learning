let s1 = Symbol();
let s2 = Symbol('hello')
let s3 = Symbol('hello')
let obj = {
  [s1]: 'coder'
}
console.log(obj);