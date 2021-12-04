/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

//方法：前缀和
var subarraySum = function (nums, k) {
  const map = new Map();
  map.set(0, 1);//表示前缀和为0的元素出现了1次
  let count = 0;
  let preFixSum = 0;
  for (const num of nums) {
    preFixSum += num;//表示当前前缀和
    if (map.has(preFixSum - k)) {
      count += map.get(preFixSum - k);//count加上前缀和值为当前（前缀和-k）的个数
    }
    if (map.has(preFixSum)) {
      map.set(preFixSum, map.get(preFixSum) + 1);//这个前缀和已经存在的话，value值加一
    } else {
      map.set(preFixSum, 1);//不存在就加入map中
    }
  }
  return count;
};