// app.js
App({
  onLaunch() {
    wx.getStorage({
      key: 'isLogin',
      success(res) {
        console.log(res);
        wx.navigateTo({
          url: '/pages/index/index',
        })
      },
      fail() {
        console.log(123);
        wx.setStorageSync('isLogin', false)
      }
    })
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
