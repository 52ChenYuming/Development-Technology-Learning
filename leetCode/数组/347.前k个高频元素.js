let topKFrequent = function (nums, k) {
  let map = new Map();
  // 返回去重后的数组
  let arr = [...new Set(nums)];
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  return arr.sort((a, b) => map.get(b) - map.get(a)).slice(0, k);
};

topKFrequent([1, 1, 1, 2, 2, 3], 2);