// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 设置nav-Bar高度
    wx.db = {}
    // 获取用户手机系统类型
    let info = wx.getSystemInfoSync();
    wx.db.statusBarHeight = info.statusBarHeight;
    if(info.system.search('Android') != -1){
      wx.db.navBarHeight = 48
    }else{
      wx.db.navBarHeight = 44
    }

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
