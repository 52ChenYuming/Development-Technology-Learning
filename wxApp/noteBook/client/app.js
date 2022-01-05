// app.js
App({
  onLaunch() {
    // 获取本地存储
    wx.getStorage({
      key: 'isLogin',
      success(res) {
        console.log(res);
        if(!res.data){
          wx.navigateTo({
            url: '/pages/login/login',
          })
        }
      },
      fail() {
        console.log('获取本地存储失败');
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
