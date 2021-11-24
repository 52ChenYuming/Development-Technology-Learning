Page({
    data:{
        vehicles: [
            {
              id: 3,
              header: "揽胜星脉",
              sub_header: "Range Rover Velar",
              description: "路虎精湛、强大的中级 SUV。",
              image: "https://resources.ninghao.net/landrover/velar-small.jpg",
              meta: {
                price: "RMB 688,000 起",
                carbon_dioxide: 173,
                fuel: 7.5,
                exterior_design: [
                  {
                    header: "简洁，优雅的设计",
                    description: "现代简洁的外观，流露出自信和独具风格的个性。全新路虎揽胜星脉引领设计潮流。现代简洁、优雅而独特的设计，诠释出动魄风范。全新路虎揽胜星脉无论行至何处，无不惹人注目。",
                    image: "https://resources.ninghao.net/landrover/velar-ext-1.jpg"
                  },
                  {
                    header: "星脉车型",
                    description: "路虎有史以来非常现代性和创新性的中级SUV。全新路虎揽胜星脉拥有悬浮式车顶和流线形腰线，而全新路虎揽胜星脉R-Dynamic则突破常规，以独特的设计，展现难以抗拒的吸引力。",
                    image: "https://resources.ninghao.net/landrover/velar-ext-2.jpg"
                  },
                  {
                    header: "隐藏式车门把手",
                    description: "全新路虎揽胜星脉以现代简洁、优雅而独特的设计，引领设计潮流。可展开式车门把手在不用时可收回。隐藏式设计缔造出无比简洁、纯粹的线条，提升了空气动力效率，降低了风阻。",
                    image: "https://resources.ninghao.net/landrover/velar-ext-3.jpg"
                  }
                ],
                interior_design: [
                  {
                    header: "全新的内饰设计",
                    description: "全新路虎揽胜星脉的内饰设计，诠释了简约中的优雅。从用户可调节车内氛围灯，到分体式滑动扶手，所有的个性化设计，让您与乘客尽享舒适旅程。",
                    image: "https://resources.ninghao.net/landrover/velar-int-1.jpg"
                  },
                  {
                    header: "精致内饰",
                    description: "全新路虎揽胜星脉的内饰设计，只为您畅意尽享驾驭的乐趣。享有盛誉的指挥官式座椅可扩大您的下方视野，便于更清楚地查看周围环境，让您在任何天气或交通状况下稳操胜券。",
                    image: "https://resources.ninghao.net/landrover/velar-int-2.jpg"
                  },
                  {
                    header: "工艺",
                    description: "车内的每一个细节，都由我们的专业团队精心打造，让您的所见所触，幻化成精彩的感观盛宴。柔软的豪华真皮，不单用于座椅，内饰空间也大面积地应用了这些材料。",
                    image: "https://resources.ninghao.net/landrover/velar-int-3.jpg"
                  }
                ]
              }
            },
            {
              id: 5,
              header: "发现",
              sub_header: "Discovery",
              description: "全能全尺寸豪华 SUV。",
              image: "https://resources.ninghao.net/landrover/discovery-small.jpg",
              meta: {
                price: "RMB 798,000 起",
                carbon_dioxide: 254,
                fuel: 10.7,
                exterior_design: [
                  {
                    header: "现代设计",
                    description: "独特的天窗和随着车身向后部延伸上升的特色线条，外加最新的前后端设计，赋予全新一代发现魅力气息。全新一代发现工艺精致，彬彬有礼，展现极具吸引力的现代英伦设计。",
                    image: "https://resources.ninghao.net/landrover/discovery-ext-1.jpg"
                  },
                  {
                    header: "黄金比例",
                    description: "独特有力且前挑精短的前端、大倾角挡风玻璃、突出的腰线和线条流畅的锥度后端，彰显简洁动感、高效现代。",
                    image: "https://resources.ninghao.net/landrover/discovery-ext-2.jpg"
                  }
                ],
                interior_design: [
                  {
                    header: "智慧空间利用",
                    description: "从手套箱到中央扶手储物箱（可选前排中央通道集成冷藏箱），智慧存储方案会突破您的想象。",
                    image: "https://resources.ninghao.net/landrover/discovery-int-1.jpg"
                  },
                  {
                    header: "饰面真材实料",
                    description: "优质真皮和织物饰面采用专门设计的优美双针缝线，并用金属和实木细节装帧。可选醒目的光泽黑色或磨砂铝饰面板，前门内部把手和变速箱换挡旋钮采用金属电镀饰面。",
                    image: "https://resources.ninghao.net/landrover/discovery-int-2.jpg"
                  }
                ]
              }
            },
           
          ],
        item:{}
    },
    //生命周期函数  页面加载完成时
    onLoad(options){
      wx.showLoading();
    // console.log(options);
    let {id} = options;
    let {vehicles} = this.data;
    //for循环是机械的代码
    let item = vehicles.find(function(vehicle){
        return vehicle.id==id;
    })
    // console.log(item,'---------');
    setTimeout(() => {
        // setData 页面会再执行一次
        this.setData({//setData会重新设定item的值，页面会重新刷新
            item:item
        })
        wx.hideLoading();
    }, 2000);
    this.setData({
        item:item
    })
    },
    testDrive(){
        wx.showToast({
            title: '欢迎试驾',
          })
    }
})