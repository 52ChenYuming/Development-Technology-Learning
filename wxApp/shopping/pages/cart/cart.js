// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts:[],
    selectAllStatus:true,
    totalPrice:0,
  },
  selectList(e){
    // 控制selected为true || false
    // console.log(e);
    let index = e.currentTarget.dataset.index;
    let selected = `carts[${index}].selected`;
    this.setData({
      [selected] :!this.data.carts[index].selected
    })
    // 判断此时carts数组中的每一条数据的selected的值
    let carts = this.data.carts;
    for(let i = 0;i<carts.length;i++){
      if(!carts[i].selected){
        this.setData({
          selectAllStatus:false,
        })
        break;
      }else{
        this.setData({
          selectAllStatus:true,
        })
      }
    }
  },
  selectAll(){

    let selectAllStatus = this.data.selectAllStatus;
    selectAllStatus = !selectAllStatus;
     // 把carts数组中的每一条数据selected值统一改为True或false
     let carts = this.data.carts;
     for (let index = 0; index < carts.length; index++) {
       carts[index].selected = selectAllStatus;
     }
     this.setData({
       selectAllStatus:selectAllStatus,
       carts:carts
     })
  },
  getTotalPrice(){

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://www.fastmock.site/mock/ec650f4f65d7db30e477266d34d83699/shop/cartlist',
      method:'GET',
      success:(res)=>{
        console.log(res) ;
        this.setData({
          carts:res.data
        })
      },
      fail:()=>{

      },
      complete:()=>{

      }

    });
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