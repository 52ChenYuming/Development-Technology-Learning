import {$toast} from '../../utils/util'
import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    userpwd:''
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
  login(){
    // 拿到密码传给后端
    if(this.data.username.trim()===''){
      $toast('账号不能为空','error');
      return 
    }
    if(this.data.userpwd.trim()===''){
      $toast('密码不能为空','error');
      return 
    }
    request('POST','/users/userLogin',{
      username:this.data.username,
      userpwd:this.data.userpwd
    }).then((res)=>{
      console.log(res);
      $toast(res.data.mess,'success');
      setTimeout(()=>{
        wx.navigateTo({
          url: '/pages/noteClass/noteClass',
        })
      },1000)
      wx.setStorageSync('userInfo', res.data.data);
    }).catch(err=>{
      console.log(err);
    })
  },
  toRegister(){
    wx.navigateTo({
      url: '/pages/register/register',
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