function test(person) {
  person.age = 26 //浅拷贝，所以p1变量的值会改变
  person = {
    name: 'hzj',
    age: 18
  }
  return person
}
const p1 = {
  name: 'fyq',
  age: 19
}
const p2 = test(p1)
// console.log(p1) // -> ?
// console.log(p2) // -> ?
