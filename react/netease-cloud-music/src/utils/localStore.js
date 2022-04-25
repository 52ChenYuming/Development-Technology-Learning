const localStore = {
  get (key) {
    try {
      let res = localStorage.getItem(key)
      if (res == null) {
        return {}
      } else {
        res = JSON.parse(res)
        return res
      }
    } catch (error) {
      return {}
    }
  },
  set (key, val) {
    localStorage.setItem(key, JSON.stringify(val))
  },
  remove (key) {
    localStorage.removeItem(key)
  },
  clear () {
    localStorage.clear()
  }
} 

export default localStore