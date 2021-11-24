//当我在终端输入 node 2.js rock（石头），电脑能自动随机出一个，并输出我们的对战结果

// console.log(process.argv);

var playerAction = process.argv[process.argv.length - 1];
console.log(playerAction);

//电脑随机生成3个
var random = Math.random() * 3;
if (random < 1) {
  var computerAction = 'rock';
} else if (random > 2) {
  var computerAction = 'scissor';
} else {
  var computerAction = 'parper';
}

//比较
if (computerAction === playerAction) {
  console.log('平局');
} else if ((computerAction === 'rock' && playerAction === 'paper') || (computerAction === 'paper' && playerAction === 'scissor') || (computerAction === 'scissor' && playerAction === 'rock')) {
  console.log('你赢了');
} else {
  console.log('你输了');
}