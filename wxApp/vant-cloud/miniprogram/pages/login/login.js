// pages/login/login.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onGotUserInfo(event){
    console.log(event);
    // 解构获取信息
    const {backPath} = this.data;
    if(event.detail.errMsg === 'getUserInfo:ok'){
      const userInfo = event.detail.userInfo;
      app.globalData.userInfo = userInfo;

      // 将用户信息存进数据库
      wx.cloud.callFunction({
        name:'createUser',
        data:{
          avatarUrl:userInfo.avatarUrl,
          name:'',
          nickNmae:userInfo.nickNmae,
          sex:userInfo.gender,
        },
        success(res){
          console.log(res);
        }
      })
    }
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