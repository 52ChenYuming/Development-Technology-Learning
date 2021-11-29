/**
 * @author 陈煜明
 * @desc 星星
 * 模块化，多人写作
*/

function RoundItem(index, x, y, ctx) {
  this.index = index;
  this.x = x;
  this.y = y;
  this.ctx = ctx;
  // 半径
  this.r = Math.random() + 1;
  this.color = 'rgba(255,255,255,1)';
}

RoundItem.prototype.draw = function () {
  this.ctx.fillStyle = this.color;
  this.ctx.beginPath();
  this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
  this.ctx.closePath();
  this.ctx.fill();
}

RoundItem.prototype.move = function () {
  this.y -= 0.3;
  this.draw();
}