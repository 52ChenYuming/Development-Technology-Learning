const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
// const bodyParser = require('body-parser')

app.set('views', path.join(__dirname, 'views')); //  设置存放模板文件的目录
app.set('view engine', 'ejs'); //  告诉express我们的模板引擎是ejs

app.use('/', indexRouter);
// app.get('/', function (req,res) {
//     res.send('hello,express')
// })

app.use('/user', userRouter);
// app.get('/user/:name',function(req,res) {
//     // console.log(req.query);
//     // console.log(req.params);
//     // console.log(req.body);
//     res.send('hello,'+ req.params.name)
// })

app.listen(3000);
