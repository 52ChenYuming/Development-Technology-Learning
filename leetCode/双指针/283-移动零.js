/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if (!nums) {
        return;
    }
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        //如果nums[i]不等于0,则互换左右指针元素位置
        // 如果等于0， 则只右指针向右边移动， 左指针不移动，这样就可以和0互换元素
        if (nums[i]) {
            temp = nums[i];
            nums[i] = nums[j];
            nums[j++] = temp;
        }
    }
};