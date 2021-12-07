var fetch = require('node-fetch');
function* gen() {
  var url = 'https://api.github.com/users/github';
  var result = yield fetch(url);//异步
  console.log(result.bio);
}

var g = gen();//执行generator函数，得到遍历器对象
var result = g.next();//放开第一个暂停按钮
result.value
  .then(data => {
    return data.json()// 先格式化为json格式
  })
  .then(data => {
    g.next(data)
  })
