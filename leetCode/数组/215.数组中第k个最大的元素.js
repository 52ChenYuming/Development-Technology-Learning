var findKthLargest = function (nums, k) {
  // 从大到小排列
  nums.sort((a, b) => b - a);
  console.log(nums);
  console.log(nums[k - 1]);
  return nums[k - 1];
};
findKthLargest([3, 2, 1, 5, 6, 4], 2);