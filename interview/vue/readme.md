# 生命周期
（能够描述出每个生命周期的执行点）
beforeCreate：vue实例初始化之前调用（此时就只有事件和生命周期函数可以生效）
created：vue实例初始化之后调用（options api 都准备就绪）
beforeMount：挂载到DOM树之前调用（vue代码的语法被render函数编译成虚拟dom结构）
Mounted：挂载到DOM树之后调用（虚拟dom结构挂载到真实dom结构上）

beforeUpdate：数据更新之前调用
updated：数据更新之后调用

<!-- 被keep-alive包裹的组件在切换的时候不会被销毁，二是缓存到内存中， 并执行deactivated钩子 -->
activated：命中缓存时执行（在缓存中取到）
deactivated 做缓存时执行（放入缓存中）

beforeDestroy：页面销毁之前
destroyed：页面销毁之后

