const expres = require('express');
const app = expres();

app.get('/home', (req, res) => {
  console.log(req.query); //show
  let { callback } = req.query;
  res.end(`${callback}('hello world')`); //  'show()'
});

app.listen(3000, () => {
  console.log('3000端口已启动');
});
