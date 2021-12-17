// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  send(){
    wx.request({
      url: 'http://192.168.31.45:3000/login',
      method:'POST',
      data:{
        userName:'admin',
        password:'123',
        me:'蜗牛'
      },
      success (res) {
        wx.navigateTo({url: '/pages/index/index'})
        wx.setStorageSync('isLogin', true)
      }
    }),
    console.log('发送成功');
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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