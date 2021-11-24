//js 强类型不一样的地方
const runner = ['发哥', 123, 5.5, 5, 3, 6, 35];
// 名字，号码，余下所有他的成绩
//...runs 是rest运算符
const [name, number, ...runs] = runner; //解构
// const name = runner[0];
// const nunmber = runner[1];
console.log(name, number, runs);

const team = ['wes', 'kait', 'Lux', 'Sheena', 'Kelly'];
const [captain, assistant, ...players] = team;
console.log(captain, assistant, players);
console.log(players, ...players);