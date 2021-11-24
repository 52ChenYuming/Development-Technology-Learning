/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const reverse = function(nums, start, end) { //翻转数组函数
    while (start < end) {
        let temp = nums[start];
        nums[start++] = nums[end];
        nums[end--] = temp;
    }
}

var rotate = function(nums, k) { //旋转数组函数，其中要调用翻转数组函数
    k = k % nums.length; //计算要反正前多少个数，用模运算是为了方式k大于数组长度
    reverse(nums, 0, nums.length - 1); //先翻转所有
    reverse(nums, 0, k - 1); //翻转前面k个
    reverse(nums, k, nums.length - 1); //在翻转后面k个
};