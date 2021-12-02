// component/ratingStar/ratingStar.js
const STAR_ON = "/assets/img/rating_star_small_on.png";
const STAR_OFF = "/assets/img/rating_star_small_off.png";
const STAR_HALF = "/assets/img/rating_star_small_half.png";
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    score:{
      type:Number,
      observer:function(newVal,oldVal,path){//只要接收到父组件给的数据就会执行
        // console.log(newVal,oldVal,path);
        let stars = [STAR_OFF,STAR_OFF,STAR_OFF,STAR_OFF,STAR_OFF];
        if(newVal>0){
          newVal = newVal /2; 
          let on = Math.floor(newVal);//全亮的个数
          for(let i =0;i<on;i++){
            stars[i] = STAR_ON;
          }
          if(on !== newVal){
            stars[on] = STAR_HALF;
          }
        }

        this.setData({
          stars:stars
        })
        // console.log(stars);
      }
    },
    iconSize:{
      type:String,
      value:'26rpx'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    stars:[STAR_OFF,STAR_OFF,STAR_OFF,STAR_OFF,STAR_OFF],
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
