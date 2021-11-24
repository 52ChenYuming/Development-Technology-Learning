/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (colors) {
  //记录颜色距离
  let distance = 0;
  let temp = 0;
  //循环到最后一个颜色
  for (let i = 0; i < colors.length - 1; i++) {
    for (let j = i + 1; j < colors.length; j++) {
      if (colors[i] != colors[j]) {
        temp = j - i;
        distance = Math.max(temp, distance)
      }
    }
  }
  return distance
};