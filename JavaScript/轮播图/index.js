let leftArrow = document.querySelector('.icon-youjiantou');
let rightArrow = document.querySelector('.icon-zuoyoujiantou');

imgNums = document.querySelectorAll('.slide-show li').length;//图片数量
let slideShow = document.querySelector('.slide-show');//ul
let width = 800;//获取ul长度

let picN = 0;//当前显示图片的下标
let cirN = 0;//当前显示小圆点的下标
let rate = 15;//切换图片的速度


console.log(imgNums);
rightArrow.onclick = function () {
  move(1);
}
leftArrow.onclick = function () {
  move(0);
}


function move(i) {
  if (i) {
    picN++;
  } else {
    picN--;
    if (picN < 0) {
      picN = imgNums - 1;
    }
  }
  if (picN > imgNums - 1) {
    picN = 0;
  }
  roll(-picN * width);// ul移动
}
//自动轮播
// timer = setInterval(move, 2000);



//移动的效果
function roll(distance) {
  console.log(slideShow.style.left);
  slideShow.style.left = distance + 'px';
}