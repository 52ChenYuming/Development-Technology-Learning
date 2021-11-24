//构造函数
function Student(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.grade = 2019;
}

var student = new Student('帅帅', 20, 'boy');
console.log(student);


//构造函数的内部原理：（当被new的时候）

// 1. 在构造函数体最前面隐式加上 this = {}
// 2. 执行 this.xxx = xxx；
// 3. 隐式返回 this