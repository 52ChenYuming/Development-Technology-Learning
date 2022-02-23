# 什么是前端路由（只在单页页面中有）

路由的概念是服务器上，URL和处理函数的映射关系
前端路由在单页应用中体现，描述的是URL和UI页面的映射关系，即URL变了引起UI更新（无需刷新页面）

# 如何实现前端路由?

1. 如何改变url却不引起页面的刷新？
   - hash 实现(url后面添加#及#后面的部分):浏览器hash值变化不会带来页面刷新
   - history 实现：HTML提供的一个对象，其中提供了 pushState 和 replaceState 两个方法,这两个方法都可以改变url且不引起页面刷新, 还有popstate，监听url变化
2. 如何检测到URL变化了？
   - hashchange事件
   - pushState 和 replaceState 的调用 和 a 标签的点击事件是可以被拦截的

