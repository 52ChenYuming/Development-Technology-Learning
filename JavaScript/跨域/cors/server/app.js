const expres = require('express');
const app = expres();
let whitList = ['http://127.0.0.1:5500']; //设置白名单

const cors = (req, res, next) => {
  let origin = req.headers.origin;
  if (whitList.includes(origin)) {
    // 设置哪个源可以访问我(我可以朝着哪个源响应成功)
    res.setHeader('Access-Control-Allow-Origin', origin);
    // 允许携带哪个头访问我
    res.setHeader('Access-Control-Allow-Headers', 'name');
    // 允许哪个方法访问我
    res.setHeader('Access-Control-Allow-Methods', 'PUT'); //简单请求是GET，复杂请求改成PUT
    // 允许携带cookie
    res.setHeader('Access-Control-Allow-Credentials', true);
    // 预检的存活时间
    res.setHeader('Access-Control-Max-Age', 6);
    // 允许发回的头
    res.setHeader('Access-Control-Expose-Headers', 'name');

    // 由于复杂请求会返回两次响应，一次用于预检，所以为了防止多次返回数据出错
    // 第一次预检时res.end()不返回数据
    if (req.method === 'OPTIONS') {
      res.end(); //预检请求不做任何处理
    }
  }
  // console.log(origin);
  next();
};

app.use(cors);

//简单请求
app.get('/home', (req, res) => {
  console.log(req.headers);
  res.end('hello world 简单请求');
});
//复杂请求
app.put('/getData', (req, res) => {
  console.log(req.headers);
  res.end('hello world 复杂请求');
});

app.listen(3000, () => {
  console.log('3000端口已启动');
});
