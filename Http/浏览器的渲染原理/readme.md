# 浏览器从输入 url 到页面渲染完成，发送了什么

- 前世

- 今生：当浏览器拿到了服务器的数据之后

# DOM树
字节数据 ==> 字符串片段 ==> 标记(token)，标记完成之后紧接着转换成Node，不同的Node节点会根据之前的联系来构建DOM树

# CSSOM树
过程类似于DOM的产生，但是这个过程更加消耗性能，因为css是可以自己定义的，也可以继承得到。这个过程浏览器需要递归得到CSSOM树，这样才能确定每一个元素到底是什么样式。

# 渲染树
DOM树 + CSS树 = render树
渲染树并不是简单的将两者合并，渲染树只包含 **需要显示** 的结点 和这些节点的样式信息，比如：display：none的节点不在渲染树中显示

# GPU绘制
浏览器拿着render树，开始GPU绘制 -----回流（重排）

# 为什么说操作DOM结构慢？
1. 因为DOM树归渲染引擎操作，js归js引擎操作，当js直接操作dom时，涉及到两个线程之间的通信，势必造成性能开销过大
2. 可能还会带来回流的情况，所以也导致了性能上的问题

# 什么时候阻塞渲染
1. html和css会阻塞页面渲染 -- 尽量不要写没有意义的dom结构（扁平化），优化选择器
2. 解析script标签，会暂停构建DOM，如果希望页面更早的渲染，就不应该在页面头部加载js

# 重排和重绘
（当面试时问到优化时，可以说重排）
重排：当元素的几何属性发生变化时，导致页面布局变动

重绘：当元素的非几何属性发送变化时

   - 重排一定重绘，重绘不一定重排

导致重排的例子：
1. 改变window 的大小
2. 改变元素的尺寸
3. 添加、删除元素
4. 页面初次渲染

# 如何减少重排重绘
1. 隐藏元素
2. 将元素脱离文档流，对其进行多次修改，再将其带回文档流中
3. 修改单一的DOM：
   - 使用类名
   - CSSText

# 浏览器的优化机制
目前大多数浏览器都会通过队列化来批量修改、重排的过程，浏览器会将修改操作放到队列中，直到一段时间后，队列的存储达到阈值，才会一次性全部重排，清空队列

但是，获取布局信息的操作，会强制队列刷新 offsetTop、offsetLeft、offsetWidth、offsetHeight scrollTop、scrollLeft、scrollWidth、scrollHeight clientTop、clientLeft、clientWidth、clientHeight getComputedStyle() getBoundingClientRect

# 字节面试题：该代码几次重排重绘
let el = document.getElementById('app');
el.style.width = (el.offsetWidth+1) + 'px';
el.style.width = 1 + 'px'

