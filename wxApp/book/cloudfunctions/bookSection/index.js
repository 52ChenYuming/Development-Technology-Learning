// 云函数入口文件
const cloud = require('wx-server-sdk')
const cheerio = require('cheerio');//读取dom结构中的标签
let superagent = require('superagent');// 发起请求获取页面html代码
let charset = require('superagent-charset')//解决乱码
charset(superagent);

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let serverUrl = `https://m.bige7.com/${event.url}` 
  const result = await superagent.get(serverUrl);//拿到页面的html
  const $ = cheerio.load(result.text);

  let bookDetailData = {}//本书详情
  bookDetailData['name'] = $('.book_info').find('.cover').find('img').attr('alt');
  bookDetailData['imgurl'] = $('.book_info').find('.cover').find('img').attr('src');
  bookDetailData['author'] = $('.book_info').find('.book_box').find('.dd_box').eq(0).find('span').eq(0).text();
  bookDetailData['status'] = $('.book_info').find('.book_box').find('.dd_box').eq(1).find('span').eq(0).text();
  bookDetailData['updateTime'] = $('.book_info').find('.book_box').find('.dd_box').eq(2).find('span').text();
  bookDetailData['brief'] = $('.book_about').find('dd').text();
  

    // 章节列表
  let lastData = [];
  let lastsection = $('.book_last').find('dd');
  for(let i=0;i<lastsection.length;i++){
    let obj = {};
    obj['name'] = $(lastsection[i]).find('a').text();
    obj['url'] = $(lastsection[i]).find('a').attr('href');
    lastData.push(obj);
  }
  return {
    bookDetailData,
    lastData
  }
}
