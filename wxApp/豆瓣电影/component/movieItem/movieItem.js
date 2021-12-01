// component/movieItem/movieItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    movie:{
      type: Object,
      observer: function(newVal, oldVal, path) {
        newVal.img = newVal.img.replace('w.h', '128.180')
        this.setData({
          movie: newVal
        })
        console.log(this.data.movieItem);
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
