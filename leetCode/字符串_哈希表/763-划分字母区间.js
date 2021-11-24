/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  let hash = {};
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = i;//记录每一个字母最后出现的位置
  }
  let left = 0;//下一段区间开始的位置
  let right = 0;//最远的边界
  let result = [];
  for (let i = 0; i < s.length; i++) {
    right = Math.max(right, hash[s[i]]);//找到这段区间需要到的最远的位置
    if (right === i) {
      result.push(right - left + 1);
      left = i + 1;
    }
  }
  return result;
};