const https = require('https');
const cheerio = require('cheerio'); //在node中帮助我们做获取dom结构的插件
const fs = require('fs');

https.get('https://movie.douban.com/top250', (res) => { //get函数获取网页信息
    let html = '';
    res.on('data', (chunk) => { //规定参数必须要是'data'
        html += chunk; //chunk是分段返回的代码
    })
    res.on('end', () => {
        // console.log(html);
        const $ = cheerio.load(html); //固定语法，必须要是$表示被修饰过后的html

        let allFilms = [];

        $('li .item').each(function() {
            const title = $('.hd .title', this).text() //固定语法this表示当前对象下,所以这里不能用箭头函数，因为箭头函数里面没有this
            const star = $('.bd .star .rating_num', this).text();
            const pic = $('.pic img', this).attr('src');
            allFilms.push({ title, star, pic });
        });
        // console.log(allFilms);
        fs.writeFile('./file.json', JSON.stringify(allFilms), (err) => {
            if (!err) {
                console.log('文件写入完成');
            }
        })
    });
});



// const server = http.createServer((req, res) => {
//     res.end('你好，世界');
// });

// server.listen(3000);