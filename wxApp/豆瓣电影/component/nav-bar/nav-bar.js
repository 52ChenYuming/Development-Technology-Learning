// component/nav-bar/nav-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    statusBarColor:{
      type:String,
      value:'#fff',
      navBarStyle:''
    },
    navBarColor:{
      type:String,
      value:'#fff'
    },
    titleColor:{
      type:String,
      value:'#000'
    },
    title:{
      type:String,
      value:''
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    topHeight:0,
    statusBarStyle:'',
    navBarStyle:''
  },
  lifetimes:{
    attached:function(){
      let statusBarStyle = `background-color :${this.data.statusBarColor};
      height:${wx.db.statusBarHeight}px`;
      
      let navBarStyle = `background-color :${this.data.navBarColor};
      height:${wx.db.navBarHeight}px;
      color:${this.data.titleColor}
      `;

      let topHeight = wx.db.navBarHeight + wx.db.statusBarHeight;
      // console.log(topHeight);
      this.setData({
        topHeight,
        statusBarStyle,
        navBarStyle,
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
