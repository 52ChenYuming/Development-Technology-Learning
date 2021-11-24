Page({ // 整个页面
  data: { // 页面数据
    slides: [{
      id: 5,
      header: '全新一代发现',
      sub_header: 'Discovery',
      description: "全尺寸七座SUV, 现已接受预定。",
      image: "https://resources.ninghao.net/landrover/discover-1.jpg"
    }, {
      id: 3,
      header: "全新揽胜星脉",
      sub_header: 'Range Rover',
      description: '标新立异的前卫揽胜',
      image: 'https://resources.ninghao.net/landrover/velar-1.jpg'
    }]
  }, // 方法
  testDrive() {
    console.log('我要试驾了....')
  },
  readmore(e) {
    console.log(e.currentTarget.dataset, '------');
    let { id, title } = e.currentTarget.dataset;
    // let title = e.currentTarget.dataset.title;
    console.log('去详情页')
    // 跳页 wx 微信 首页-》详情
    wx.navigateTo({
      url: `/pages/vehicles/index?id=${id}`
    })
  }
})