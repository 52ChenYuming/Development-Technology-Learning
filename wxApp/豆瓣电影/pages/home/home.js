// pages/home/home.js
var bmap = require('../../utils/bmap-wx.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    allMovies:[
      {
        title:"正在热映",
        url:'/movieOnInfoList',
        movies:[]
      },
      {
        title:"即将上映",
        url:'/comingList?ci=10&token=&limit=10',
        movies:[]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadDate(0);//正在热映
    this.getCity((city)=>{
      this.loadDate(1,{ci:city});//即将上映
    });
  },
  //获取电影数据
  loadDate(index,params={}){
    let obj = this.data.allMovies[index];
    // console.log(obj);
    let url = wx.db.url(obj.url);
    // console.log(url);
    //获取即将上映的接口参数
    let options = {
      ci:params.ci,
      tokenL:'',
      limit:10
    }
    wx.request({
      url: url,
      data: {},
      header: {'content-type':'application/json'},
      method: 'GET',
      data: options,
      success: (res) => {
        // console.log(res);
        let movies = res.data.movieList || res.data.coming;
        for(let i =0; i<movies.length;i++){
          obj.movies.push(movies[i]);
      }
        // 更新数据源
        this.setData(this.data);
        console.log(this.data.allMovies);
      },
      fail: () => {},
      complete: () => {}
    });
  },
  // 获取所在城市
  getCity(cb){
    // 利用百度定位
    const BMap = new bmap.BMapWX({ 
      ak: 'glaRNsWqKeEosQk6SfEW0ZkRwokEQSke' 
    }); 
    // 发起regeocoding检索请求 
    BMap.regeocoding({ 
      fail: ()=>{}, 
      success: (data)=>{
        // 拿到城市编码
        console.log(data.originalData.result.cityCode);
        cb(data.originalData.result.cityCode);
      }, 
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})