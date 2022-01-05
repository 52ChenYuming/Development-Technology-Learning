import request from '../../utils/request'
import {$toast} from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickname:'',
    username:'',
    userpwd:'',
  },
  nicknameVal(e){
    this.setData({
      nickname:e.detail.value
    })
  },
  usernameVal(e){
    this.setData({
      username:e.detail.value
    })
  },
  userpwdVal(e){
    console.log(e.detail.value);
    this.setData({
      userpwd:e.detail.value
    })
  },
  register(){
    request('POST','/users/userRegister',{
      username:this.data.username,
      userpwd:this.data.userpwd,
      nickname:this.data.nickname
    }).then((res)=>{
      console.log(res);
      $toast(res.data.mess,'success');
      setTimeout(()=>{
        wx.navigateTo({
          url: '/pages/login/login',
        })
      },1000)
    }).catch(err=>{
      console.log(err);
    })
  },
  toLogin(){
    wx.navigateTo({
      url: '/pages/login/login',
    })
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