const ws = require('nodejs-websocket')
const PORT = 3000

// 记录当前用户数
let count =0;

const server = ws.createServer(connect=>{
  console.log('用户连接成功');
  count++;
  connect.userName = `用户${count}`;
 // 告诉所有人，xxx用户加入了群聊
  broadcast(`${connect.userName}加入群聊`)

  //  用户传过来的数据
  connect.on('text',data=>{
    console.log(`接受到的数据: ${data}`);

    // 返回接受到的数据
    connect.sendText(data)
  })

  // 关闭连接
  connect.on('close',()=>{
    console.log('断开连接');
  })

  // 如果报错
  connect.on('error',()=>{
    console.log('用户连接异常');
  })
})

const broadcast = (msg)=>{
  server.connections.forEach(item=>{
    // 给每个连接了该ws的用户发消息
    item.send(msg);
  })
}

server.listen(PORT,()=>{
  console.log('服务已启动，端口号3000');
})