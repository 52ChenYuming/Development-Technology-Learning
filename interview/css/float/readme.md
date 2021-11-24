# 浮动 1.html
- 优势：
  1. 可以控制元素的位置
  2. 可以实现文字的环绕效果
- 缺陷：浮动的元素会脱离文档流，导致无法撑起父容器的宽高，导致父容器高度塌陷

# 清除浮动
1. 在父容器结束标签之前，插入清除浮动的块级元素 2.html
弊端：造成性能浪费，增加了不需要的文档流，增加了浏览器的渲染压力 

2. 给父容器增加一个after伪元素，在伪元素上做clear操作（推荐）3.html

3. 给同级邻后的元素加上clear属性（不是很推荐） 4.html

4. 将父容器设置成为BFC容器   5.html


# BFC（Block Formatting Context）块级格式化上下文
- margin重叠

BFC创建方法：
1. overflow：auto || hidden || overlay || scoll
2. float: 值不为none；
3. position: absolute || fixed
4. display: inline-block || inline-... || table 
5. flex: flexd || inline-flex

BFC的特点：
1. BFC容器内部的盒子会垂直方向一个接一个排列（常规文档流）
2. BFC是页面上的一个独立的容器，容器里的子元素不会影响到外面的元素
3. 计算BFC容器的高度时，会考虑BFC所包含的所有元素，连浮动元素也包含
4. 可以解决margin重叠的bug

可以学习的文章:
【链接】学习BFC(BlockFormattingContext)
https://juejin.cn/post/6844903495108132877

