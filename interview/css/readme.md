# 1.什么是盒模型？两者的区别？怎么设置这两者盒模型？

  - 标准盒模型：高度和宽度是内容的高度和宽度（不加内边距和边框）
  - IE盒模型：IE盒模型的高度和宽度包括border和padding（加了内边距和边框）
  
  - 标准盒模型宽高指的是content的宽高，IE盒模型的宽高包含内边距（padding）和边框（border）

  - box-sizing: border-box;IE盒模型 
    box-sizing: content-box;标准盒模型 


# 2. 如何使用JS获取和设置盒子的宽高？你能想到几种方法？
  - 1. dom.style.width(只能获取行内样式的值，但是能设置宽高)
  - 2. dom.offsetWidth(只能获取)
  - 3. dom.getBoundingClientRect().width(只能获取)
  - 4. window.getComputedStyle(dom).width(只能获取)
  - 5. dom.CurrentStyle.width(只能获取，且只支持IE)


# 3. 描述一下下面这个盒子的大小，颜色等信息（content-box模型）
  - 注意是等信息，看到的都说
  - 大小：0
  - padding：pink（继承content颜色）padding颜色和背景色相同
  - border：blue（继承字体颜色）


# 4. 当用border-radius将small盒子设置成圆，内容会超出圆形吗？
  - 会超出，因为border-radius属性只是改变视觉效果，实际上盒子占据的空间还是不变的


# 5. 当元素设置成inline-block会出现什么问题？怎么消除？

  - 问题：元素之间会有间隙

  - 解决方案：
    1. 父容器font-size设置为0，子容器再把font-size设置回来（不设置回来内容就没有了）
    2. 去掉HTML中的空格（有点丑，可读性太差）,用注释换行可以增加一下可读性
    3. 借助html注释
    4. margin给一个负值，不同浏览器值不同
    5. 去掉a标签的闭合标签</a>
    6. 父容器设置letter-spacing为负值，子容器将letter-spaceing重新设置为0
    6. 父容器设置word-spacing为负值，子容器将word-spaceing重新设置为0


# 6. 行内元素可以设置padding、margin吗
  - 行内元素padding、margin只在左右有效，上下无效！


# 7. padding：1px2px3px;  这代码有什么效果
  - 上：1px
  - 右：2px
  - 下：3px
  - 左：（2px）没有就对应着2px


# 8. 内边距的百分比数值是怎么计算的？内边距的百分比数值为什么不根据自身的宽度来计算呢？
  - 根据父元素的宽度计算的


# 9. BFC


# 10. 清除浮动的方法（百分之一万会被问到的问题）

# 11. 画一条0.5px的线
  - <meta name="viewport "content= "width = device-width, initial-scale=0.5">
  - transform:scale(0.5);
  - border-image();

# 12. rem
(function(){
  let width = document.documentElement.clintWidth
  let fontS = width/10;
  document.documentElement.style.fontSize = fontS +'px';
})()








