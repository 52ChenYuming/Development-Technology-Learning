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

  let currentPage = event.currentPage // 第几页

  // 分页章节
  let pageData = {}
  let pageSecction = []
  let pageList = $('.book_last').find('dd')
  pageData['totalPage'] = pageList.length / 20 // 当前这本小数能形成多少页

  let len = (currentPage - 1) * 20
  for (let i = len + 1; i < 21 + len; i++) {
    let obj = {}
    obj['sectionName'] = $(pageList[i]).find('a').text()
    obj['url'] = $(pageList[i]).find('a').attr('href')
    pageSecction.push(obj)
  }
  pageData['currentPageData'] = pageSecction

  return {
    pageData
  }
}