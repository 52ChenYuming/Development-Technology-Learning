// component/nav-bar/nav-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    statusBarColor:{
      type:String,
      value:'#fff'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    topHeight:0,
    statusBarStyle:''
  },
  lifetimes:{
    attached:function(){
      let statusBarStyle = `background-color :${this.data.statusBarColor};
      height:${wx.db.statusBarHeight}px`;
      console.log(statusBarStyle);

      let topHeight = wx.db.navBarHeight + wx.db.statusBarHeight;
      // console.log(topHeight);
      this.setData({
        topHeight,
        statusBarStyle
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
