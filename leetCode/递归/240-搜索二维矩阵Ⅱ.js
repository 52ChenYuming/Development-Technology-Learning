/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

//思路：将其类比为二分查找树，从第一行的最后一列开始遍历，当目标值大于行数时，行++，小于时列--；
var searchMatrix = function (matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return false;
  }
  let row = 0;
  let col = matrix[0].length - 1;//从最后一列开始遍历
  while (row < matrix.length && col >= 0) {
    if (target > matrix[row][col]) {
      row++;
    } else if (target < matrix[row][col]) {
      col--;
    } else if (target === matrix[row][col]) {
      return true;
    }
  }
  return false;
};