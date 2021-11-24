# css的考点与底层

- 如何让元素消失
  1.脱离文档流Document
    - position:absolute; 页面还是会绘制渲染
    - display:none; 页面渲染不执行，不占位置
    - opacity:0;在文档流之中，全透明
