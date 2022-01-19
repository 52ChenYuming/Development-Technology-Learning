# 响应式
1. 数据源发生变化
2. 被观察者发现
3. 观察者通知render函数重新编译出来一份新的虚拟DOM结构
4. 拿虚拟DOM结构替换掉已有的真实DOM（diff算法）

# Object.defineProperty


# vue的响应式原理
- 被观察者发现（如何发现）
- 