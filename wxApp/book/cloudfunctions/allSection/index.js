// 云函数入口文件
const cloud = require('wx-server-sdk')
const cheerio = require('cheerio') // 读取dom结构中的标签
let superagent = require('superagent') // 发起请求获取页面html代码
let charset = require('superagent-charset') // 解决乱码
charset(superagent)

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let serverUrl = `https://m.bige7.com/${event.url}/list.html`
  const result = await superagent.get(serverUrl) // 拿到页面的html
  const $ = cheerio.load(result.text)

  // 分页章节
  let pageData = []
  let pageList = $('.book_last').find('dd')
  for (let i = 1; i < 20; i++) {
    let obj = {}
    obj['sectionName'] = $(pageList[i]).find('a').text()
    obj['url'] = $(pageList[i]).find('a').attr('href')
    pageData.push(obj)
  }

  return {
    pageData
  }
}