// pages/bookSection/bookSection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookDetailData:[],
    lastData:[],
    pageData:[],
    pageArray:[1,2,3,4,5],
    currentPage:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.url);
    const { url } = options;
    this.getSection(url);
    this.getAllSection(url);
  },
  getAllSection(url){
    wx.cloud.callFunction({
      name:'allSection',
      data:{
        url:url || '/book/2749/'
      },
    }).then(res=>{
      console.log(res);
      this.setData({
        currentPage:res.result.pageData
      })
    })
  },
  getSection(url){
    wx.cloud.callFunction({
      name:'bookSection',
      data:{
        url:url || '/book/2749',
        currentPage:this.data.currentPage || 1
      }
    }).then(res=>{
      // console.log(res);
      this.setData({
        bookDetailData:res.result.bookDetailData,
        lastData:res.result.lastData
      })
    })
  },
  toText(e){
    console.log(e);
    let url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: `/pages/bookContent/bookContent?url=${url}`,
    })
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