# MVC的开发模式：（模型-视图-控制器）
模板层 路由层 控制层 服务层

1. index.js // 程序的主文件

2. models // 存放操作数据库的文件

3. routes // 存放路由文件

4. views // 存放模板文件

5. public //存在静态资源


express: web 框架
express-session: session 中间件
connect-mongo: 将 session 存储于 mongodb，结合 express-session 使用
connect-flash: 页面通知的中间件，基于 session 实现
ejs: 模板
express-formidable: 接收表单及文件上传的中间件
config-lite: 读取配置文件
marked: markdown 解析
moment: 时间格式化
mongolass: mongodb 驱动
objectid-to-timestamp: 根据 ObjectId 生成时间戳
sha1: sha1 加密，用于密码加密
winston: 日志
express-winston: express 的 winston 日志中间件