var topKFrequent = function (nums, k) {
  let map = new Map();
  for (let num of nums) {
    map[num] = map[num] ? map[num] + 1 : 1;
  }
  console.log(map);


};

topKFrequent([1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3], 2);