/**
 * @param {number[]} nums
 * @return {boolean}
 */

//思路贪心法：找到递增的两个序列，再找到一个比中间数大的就可以了，如果右边比左边小，则右边成为新左边，要是右边比中间小，则右边成为新中间。
var increasingTriplet = function (nums) {
  let left = Infinity;
  let mid = Infinity;
  // let [left, mid] = [Infinity, Infinity];//解构赋值法
  for (const right of nums) {
    if (right > mid) {
      return true;
    } else if (right > left) {
      left = right;
    } else {
      mid = right;
    }
  }
  return false;
};