module.exports = {
  presets: [
    ["@babel/preset-env", {
      "targets": {
        "browsers" : ["last 2 version"] //最近的2个版本的浏览器能被识别
      }
    }]
  ]
}