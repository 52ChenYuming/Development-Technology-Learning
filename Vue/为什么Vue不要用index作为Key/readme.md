# Vue是怎么更新页面的
vue的代码 -> 生成虚拟DOM结构 -> 替换页面上的真实的DOM结构 -> 渲染到页面上
响应式的数据源发生变化 -> 被watch观察者发现 -> 通知update函数去更新视图
render负责生成node，update携带vnode去触发diff，找到不用，再去替换
# VNode 虚拟dom
{
  tag: 'ul',
  children: [
    { tag: 'li', children: [{ vnode: { text : '1'}}]}
  ]
}

# diff
1. 不是相同节点：
   直接销毁旧的vnode，渲染新的vnode
2. 节点相同，就要做到节点复用(都是ul)
  - 如果vnode是文字节点：直接调用浏览器dom api 替换文本
  - 如果vnode不是文字节点：如果新的vnode有children，旧的没有，直接添加子节点
                        如果旧的vnode有children，新的没有，删除旧的子节点
                        如果新旧vnode都存在children，就要diff新旧节点的不同

# diff新旧节点的不同
旧首节点： let oldStartIdx = 0
新首节点： let newStartIdx = 0

旧尾结点： let oldEndIdx = oldCh.length - 1
新尾结点： let newEndIdx = newCh.length - 1

通过while循环不停的对比新旧节点的两端，直到没有节点可比

# sameVnode

function same(a, b) {
  return (
    a.key === b.key && (
      a.tag === b.tag &&
      a.isComment === b.isComment &&
      isDef(a.data) === isDef(b.data) &&
      sameInputType(a, b)
    )
  )
}
<!-- a.tag===b.tag 重量级操作 -->
没有用for循环源码会自动帮我们打上key值，用for循环需要自己加


diff对比只要找到父节点不一样，就直接替父节点下面所有结点

旧首节 - 新首节
旧尾结 - 新首节

旧首节 - 新尾节
旧尾节 - 新尾节

-双指针法


# 为什么不要以index作为key
发明虚拟dom的一个目的就是为了减少对真实dom的操作，而用index作为key会导致sameVnode第一层就命中，进入到第二层的标签判断，从而导致虚拟Dom带来的优化失效

删除结点的时候，本应该删除第一个结点的情况下，会删除最后一个节点，却把第一二个节点复用

# 随机数作为key
不可以，能复用的结构现在都不能判断为相同，会导致所有dom全部都被替换