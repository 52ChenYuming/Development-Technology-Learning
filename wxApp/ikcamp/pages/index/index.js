import util from '../../utils/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:1,
    days:3,
    pageSize:4,
    totalSize:0,
    hasMore:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.requestArticle()
  },
  requestArticle(){
    util.request({
      url: 'list',
      data:{
        tag:'微信热门',
        start:this.data.page || 1,
        days:this.data.days || 3,
        pageSize:this.data.pageSize,
        langs:'en'
      },
      mock:true
    }).then(res=>{
      console.log(res);
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