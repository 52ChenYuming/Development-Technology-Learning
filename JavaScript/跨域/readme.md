# 什么是跨域（必考点）
所有浏览器都具有同源策略 --- 协议 + 域名 + 端口 都相同

http://www.abc.com:8080/detail
http协议
www子域名
abc.com主域名
8080端口
detail请求支援地址






# 跨域的解决方案
1. jsonp
原理：利用script标签中的src属性不会被同源策略所拦截的这一机制，将我们要请求的url地址，添加到script的src属性中，且携带上前端全局下的一个函数名作为参数给到后端，后端获取到前端传递的函数名，返回该函数的调用语法，将要返回的数据放在该函数的调用作为参数，当浏览器接收到全局下的函数被调用的后端响应时，会自动执行该函数，从而从参数中获取到后端的返回数据

缺点：
   1. 需要对方的服务器做支持才可以
   2. 只支持get请求，有局限性，可能会遭到xss攻击


2.cors
 cors是w3c的标准，他允许浏览器向跨源服务器发出XMLHttpRequest请求。也就是说浏览器发请求是不会被跨域的，跨域的核心是后端响应不了。
 
 要让后端响应内容能够不被浏览器拦截，关键在于后端。如果后端也能遵从cors标准的话，后端的响应也可以跨源

 - 简单请求
   1. 使用get、post、head
   2. Content-Type的值仅限于:
      text/plain || multipart/form-data || application/x-www-form-urlencoded
 - 复杂请求
   1. 不满足请求条件的就是复杂请求
   2. 复杂请求的cors请求会在正式通信之前，增加一次http查询请求，成为"预检"，预检是用来知道服务端是否允许跨域请求,预检发的是options方法

3. postMessage

  Html5 中的 xhr 提供的API ，postMessage()方法允许来自不同源脚本采用异步方式进行有限通信，可以实现跨文本，多窗口，跨源消息传递
  可以解决这么几个问题：
  - 页面和其他窗口的传递数据
  - 多窗口之间的消息传递
  - 页面与嵌套的iframe消息传递
  - 上面三个场景的跨域数据传递

otherWindow.postMessage(message,targetOrigin,[transfer])
  -message:要发送给其他window的数据
  -targetOrigin：目标窗口
  transfer(可选)和message一起传递的一个对象，这个对象的所有权移交给接收方