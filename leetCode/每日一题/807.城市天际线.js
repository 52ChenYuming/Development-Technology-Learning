/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  // 1. 创建一个存储每行每列最大数的数组 
  // 2. 确定可以增加到多高，并计算增加的高度
  // 最大高度数组如下
  let row = new Array(grid.length).fill(0);
  let col = new Array(grid[0].length).fill(0);
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      row[i] = Math.max(row[i], grid[i][j]);
      col[j] = Math.max(col[j], grid[i][j]);
    }
  }
  // console.log(row);
  // console.log(col);
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      count += Math.min(row[i], col[j]) - grid[i][j];
    }
  }
  return count;
};
maxIncreaseKeepingSkyline([[59, 88, 44], [3, 18, 38], [21, 26, 51]]);