// pages/home/home.js
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
    this.loadDate(0)//正在热映
  },
  //获取电影数据
  loadDate(index,params){
    let obj = this.data.allMovies[index];
    let url = wx.db.url(obj.url);
    // console.log(url);
    wx.request({
      url: url,
      data: {},
      header: {'content-type':'application/json'},
      method: 'GET',
      success: (res) => {
        // console.log(res);
        let movies = res.data.movieList;
        for(let i =0; i<movies.length;i++){
          if(movies[i] && movies[i].sc) movies[i].sc *= 10;
          obj.movies.push(movies[i]);
        }
        // 更新数据源
        this.setData(this.data)
        console.log(this.data.allMovies);
      },
      fail: () => {},
      complete: () => {}
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