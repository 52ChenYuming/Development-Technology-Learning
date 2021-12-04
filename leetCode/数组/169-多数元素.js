/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    //方法一：排序
    //理解：因为该元素出现次数超过一半，所以中位数一定是它
    nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length / 2)];
};