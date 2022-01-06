import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailData: {
      c_time: "2018年12月05",
      collection_id: null,
      head_img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F878a6c57bed136d9d176a6eb8289a04787b126bf.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625193260&t=33a09705f80263f8353fcadf2be4a2a6",
      id: 8,
      is_collection: 0,
      m_time: "2018年12月05",
      nickname: "十三哥",
      note_content: "<p>等你，在这飘雪的季节</p><p>这个世界</p><p>因你的到来</p><p>变得安静而和谐</p><p>你的妩媚、飘然</p><p>让<a href=\"https://www.duanwenxue.com/qinggan/gushi/\" target=\"_blank\" style=\"color: rgb(102, 102, 102);\">故事</a>的情节生动了许多</p><p>你的剔透、洁美</p><p>是用爱心在给世间着色</p><p>你的出现</p><p>浸染着正义和善良</p><p>你的飘扬</p><p>闪烁着人性的光泽</p><p>你来了</p><p>迈着轻盈的脚步而来</p><p>心灵碰撞更能催人泪下</p><p>温暖带来<a href=\"https://www.duanwenxue.com/diary/xingfu/\" target=\"_blank\" style=\"color: rgb(102, 102, 102);\">幸福</a>的感觉</p><p>你真的来了</p><p>就在这个飘雪的午夜</p><p>唐诗宋词伴着悠扬的旋律</p><p>闪亮着我的内心世界</p>",
      note_type: "旅行",
      title: "等你，在这飘雪的季节",
      useId: 15,
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    request('GET','/note/findNoteDetailById',{
      id:options.id
    }).then(res=>{
      console.log(res);
      this.setData({
        detailData:res.data.data[0]
      })
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