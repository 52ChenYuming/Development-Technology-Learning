# 进程 和 线程

进程：cpu在运行指令及加载和保存上下文所需要的时间
线程：是进程中更小的单位，描述的是执行一段指令所需要的时间

js是单线程的语言，可以节约内存节约上下文切换的时间

# 浏览器中的event-loop事件循环

当js代码在执行时，就是往调用栈中放进去函数再执行，但是！如果遇到异步函数，异步函数就会被挂起，并在调用栈为空的时候拿出来执行。

从任务队列中提取函数出来执行时分两种情况：
1. 微任务（microTask）
2. 宏任务（macroTack）

（必须要背出来）
微任务： process.nextTick, promise.then, MutationObserver
宏任务： script, setTimeout, setInterval, setImmediate, I/O, UI-rendering(渲染)

# event-loop顺序
1. 首先执行同步代码，这属于宏任务
2. 当执行完所有的同步代码后，执行栈为空，查询是否有异步代码要执行
3. 执行所有微任务
4. 当所有微任务执行完毕之后，有需要的话会渲染页面
5. 开启下一次的Event-Loop事件循环，执行宏任务中的异步代码