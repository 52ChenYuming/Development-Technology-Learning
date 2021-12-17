// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    musicListItem:[]
  },
  getMovieList(){
    wx.request({
      url: 'http://192.168.31.45:3000/music-list',
      method:'GET',
      data:{},
      success:res=>{
        // console.log(res);
        // console.log(res.data.list.creatives[0].uiElement);
        // console.log(res.data.list.creatives[0].uiElement.image.imageUrl);
        // console.log(res.data.list.creatives[0].uiElement.mainTitle.title);

        let ui = res.data.list.creatives;
        let musicListItem = []
        for(let i = 0;i<ui.length;i++){
          // console.log(ui[i].uiElement.image);
          let obj = {};
          obj['imgUrl'] = ui[i].uiElement.image;
          obj['mainTitle'] = ui[i].uiElement.mainTitle;
          musicListItem.push(obj);
          // console.log(obj);
        }
        // console.log(this.data.musicListItem);
        this.setData({
          musicListItem: musicListItem
        });
        console.log(this.data);
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMovieList();
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