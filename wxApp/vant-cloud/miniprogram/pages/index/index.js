// miniprogram/pages/index/index.js
import Notify from '../../miniprogram_npm/@vant/weapp/notify/notify';
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newGroupModal: false,
    groupName: ''
  },

  showNewGroupModal() {
    this.setData({
      newGroupModal: true
    })
  },
  closeDialog() {
    this.close(true)
  },

  close(flag) {
    const beforeClose = (action) => new Promise((resolve) => {
      console.log(action);
      setTimeout(() => {
        resolve(flag);
      }, 0)
    });
    Dialog.confirm({
      beforeClose,
      title: '创建一个群组',
      selector: '#new-group-modal'
    });
  },

  createGroup() {
    let self = this
    if (this.data.groupName === '') {
      Notify({
        message: '起个名字吧',
        selector: '#notify-selector'
      });
      this.close(false)
    } else {
      // 调用云函数，将groupName传给后端
      wx.cloud.callFunction({
        name: 'createGroup',
        data: {
          groupName: this.data.groupName
        },
        success(res) {
          console.log(res);
          self.setData({
            groupName: '',
            newGroupModal: false
          })
          Notify({
            message: '新建成功',
            selector: '#notify-selector',
            backgroundColor: '#28a745'
          });
          setTimeout(() => {
            wx.switchTab({
              url: '/pages/group/group'
            })
          }, 1500)
        }
      })
      // this.close(true)
    }
  },

  onGroupNameChange(event) {
    // console.log(event.detail);
    this.setData({
      groupName: event.detail
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