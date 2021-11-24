/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const length = nums.length;
  const answer = new Array(length);//定义一个每个元素位置乘积的数组

  answer[0] = 1;
  for (let i = 1; i < length; i++) {//计算左边元素的乘积
    answer[i] = nums[i - 1] * answer[i - 1];
  }
  let R = 1;
  for (let i = length - 1; i >= 0; i--) {//计算右边元素的乘积
    answer[i] = answer[i] * R;
    R *= nums[i];//R是右边所有元素乘积，表示下一个元素要乘到R上的值

  }
};