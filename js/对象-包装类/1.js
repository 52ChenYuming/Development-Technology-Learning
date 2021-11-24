var Cym = {
  name: 'chenyuming',
  age: 20,
  sex: 'boy',
  smoke: function () {
    console.log('I am somking! cool!');
    this.health--;
  },
  drink: function () {
    console.log('I am Dirink');
    this.health++;
  },
  health: 100,
};


// Cym.health++;//可读可写
// console.log(Cym.health);

// Cym.smoke();
// Cym.drink();
// Cym.drink();
// console.log(Cym.health);


//增
Cym.girlFrined = 'Cyj';

//查

console.log(Cym.girlFrined);

//删
delete Cym.sex;

//当访问一个不存在的变量时会报错，当访问一个对象中不存在的属性就为underfined？为什么?