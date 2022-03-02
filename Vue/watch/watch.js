// 独立监听某个数据的变化
// 提供一个可以执行函数的场所

class Watcher {
  constructor(opts) {
    this.$data = opts.getBaseType(opts.data) === 'Object' ? opts.data : {}
    this.$watch = opts.getBaseType(opts.watch) === 'Object' ? opts.watch : {}
    for(let key in opts.data) {
      this.setData(key)
    }
  }

  getBaseType(target) {
    let typeStr = Object.prototype.toString.call(target)
    return typeStr.slice(8, -1)
  }

  setData(_key) {
    Object.defineProperty(this.$data, key, {
      get: function() {
        return this.$data[_key]
      },
      set: function(newVal) {
        console.log(newVal);
      }
    })
  }
}

let vm = new Watcher({
  data: {
    a: 0,
    b: 'hello'
  },
  watch: {
    a: function(newVal, oldVal) {

    }
  }
})