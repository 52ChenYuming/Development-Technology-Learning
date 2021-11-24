// pages/main/main.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isLeft:true
    },
    tabChangeHot(){
        this.setData({
            isLeft:true
        })
        console.log(this.data.isLeft);
    },
    tabChangeWating(){
        this.setData({
            isLeft:false
        })
        console.log(this.data.isLeft);
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // console.log('onLoad');
        // 保留this值，防止后续this指向被干扰
        let that = this;
        wx.request({
            url:'https://www.fastmock.site/mock/39ac87de3060aa2bb2ba20a0ff375c81/cat-movie/mostLike',
            method:'GET',
            success(res) {
                // console.log(res);
                that.setData({
                    list:res.data
                })
                console.log(that.data.list);
            }
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        console.log('onReady');
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        console.log('onShow');
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        console.log('onHide');
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