function deepCopy(obj) {
  // return JSON.parse(JSON.stringify(obj)); 过于简单，面试官会不满意
  let newObj;
  for (let i in obj) {
    newObj[i] = obj[i];
  }
  return newObj;
}
let person = { name: 'mike', age: 19 }
let newPerson = deepCopy(person)
person.age = 19;
console.log(newPerson);