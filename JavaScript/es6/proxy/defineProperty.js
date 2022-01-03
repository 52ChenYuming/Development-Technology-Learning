// 数据劫持
// Object.defineProperty

let person = {
  name: '冯总',
  eat: 'dinner',
};

Object.defineProperty(person, 'eat', {
  get() {
    return eat;
  },
  set(newVal) {
    // console.log(newVal);
    eat = 'chicken';
  },
});

person.eat = 'duck';
person.like = 'dinner';
console.log(person.eat);
