//app.js
App({
  onLaunch: function (options) {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'lm-lesson',
        traceUser: true,
      })
    }

    // 查看是否已经授权
    wx.getSetting({
      success: (settingRes) => {
        console.log(settingRes);
        // 已经授权
        if (settingRes.authSetting['scope.userInfo']) {
          wx.switchTab({
            url: '/pages/index/index'
          })
        } else {
          wx.redirectTo({
            url: `/pages/login/login?back=${options.path.split('/')[1]}`
          })
        }
      }
    });
      
    this.globalData = {
      userInfo: null // 登录成功之后就会有用户信息
    }
  }
})
