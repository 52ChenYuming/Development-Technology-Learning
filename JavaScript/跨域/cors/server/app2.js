const expres = require('express');
const app = expres();

var cors = require('cors');

let whitList = ['http://127.0.0.1:5500']; //设置白名单

app.use(cors());

//简单请求
app.get('/home', (req, res) => {
  // console.log(req.headers);
  res.end('hello world 简单请求');
});
//复杂请求
app.put('/getData', (req, res) => {
  // console.log(req.headers);
  res.end('hello world 复杂请求');
});

app.listen(3000, () => {
  console.log('3000端口已启动');
});
