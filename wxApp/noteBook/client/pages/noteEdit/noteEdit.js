import { $toast } from '../../utils/util'
import request from '../../utils/request'
wx.cloud.init()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fileList: [],
    noteTitle: "",
    noteContent: "",
    show: false,
    actions: [
    {
      name: '旅游',
    },
    {
      name: '美食',
    },
    {
      name: '科技',
    },
    {
      name: '汽车'
    },
    {
      name: '时尚'
    }
    ],
    noteType: "选择分类",
    userId: "",
    nickname: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: "userInfo",
      success: res => {
        this.setData({
          userInfo: res.data
        })
      }
    })
    wx.getStorage({
      key: "nickname",
      success: res => {
        this.setData({
          nickname: res.data
        })
      }
    })
  },

  noteContent(e) {
    console.log(e.detail.html);
    this.setData({
      noteContent: e.detail.html
    })
  },

  noteTitle(e) {
    console.log(e.detail);
    this.setData({
      noteTitle: e.detail
    })
  },

  noteImg(e) {
    const { file } = e.detail
    wx.cloud.uploadFile({
      cloudPath: `${new Date().getTime()}.png`,
      filePath: file.url
    }).then(res => {
      let fileList = this.data.fileList
      fileList.push({ url: res.fileID })
      this.setData({
        noteImg: res.fileID,
        fileList: fileList
      })
    })
  },

  onOpen() {
    this.setData({
      show: true
    });
  },

  onClose() {
    this.setData({
      show: false
    });
  },

  onSelect(event) {
    this.setData({
      noteType: event.detail.name
    });
  },

  publish() {
    console.log(
      this.data.noteContent,
      this.data.noteTitle,
      this.data.noteImg,
      this.data.noteType,
      this.data.userId,
      // nickname
    );
    request('POST', '/note/publishNote', {
      noteContent: this.data.noteContent,
      noteTitle: this.data.noteTitle,
      noteImg: this.data.noteImg,
      noteType: this.data.noteType,
      userId: this.data.userInfo.id,
      nickname: this.data.userInfo.nickname
    }).then(res => {
      console.log(res);
      $toast(res.data.mess, 'success');
      setTimeout(() => {
        wx.navigateTo({
          url: '/pages/noteClass/noteClass',
        })
      }, 1000)
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
