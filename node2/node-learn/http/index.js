const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/favicon.ico') {
    res.writeHead(200);
    res.end();
    return;
  }
  res.writeHead(200);
  // console.log(req.url);
  // res.end('hello');
  fs.createReadStream(__dirname + '/index.html').pipe(res);
}).listen(3000);