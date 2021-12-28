function deepCopy(obj) {
  // 方法一：return JSON.parse(JSON.stringify(obj)); 过于简单，面试官会不满意
  // 方法二：
  // let newObj = obj instanceof Array ? [] : {};
  // for (let i in obj) {
  //   if (obj[i] instanceof Object) {
  //     newObj[i] = deepCopy(obj[i]);
  //   } else {
  //     if (obj.hasOwnProperty(i)) {
  //       newObj[i] = obj[i];
  //     }
  //   }
  // }
  // return newObj;
  // 方法二简化代码版：
  let copy = obj instanceof Array ? [] : {}
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      copy[i] = obj[i] instanceof Object ? deepCopy(obj[i]) : obj[i]
    }
  }
  return copy;
}
let person = {
  name: 'mike',
  age: 18,
  like: {
    sports: 'running',
    food: 'beef'
  }
}
let newPerson = deepCopy(person)
person.like.sports = 'football';
console.log(newPerson);