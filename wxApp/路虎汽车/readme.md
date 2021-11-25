- /pages 小程序的核心开发目录,基本架构
- 每个页面都是一个文件
  wxml html 结构
  wxss css  样式
  js        数据和交互 data method onLoad生命周期函数
  json      配置

- 新增一个页面
    /pages 小程序内置的功能
      添加一个文件夹
      右键添加一个page

- app.json
    项目描述文件

- wx
    小程序的库
    navigateTo，可以实现页面跳转
    showToast

- 语法
    bindtap tap 事件的一种  bind click
    事件处理函数放到Page({})
    e 是 事件对象
    e.currentTarget.dataset  拿到  data-id
    `/pages/你想要跳转到地址/index？id=${item.id}`
    {{  }} 占位符中的数据   在data中找到
    this.setData({}) ，可以修改占位符中的值
    item 可以展示任何一部车的详情 ->首先通过onload 拿到一个id属性 ->然后在vehicles.find() ->this.setData({})
    -> 然后wxml页面就显示出来

  