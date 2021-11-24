/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // 如果长度为0直接返回0
    if (nums.length == 0) {
        return 0;
    }
    // 1、定义快指针和慢指针
    let slow = 0;
    // 2、开始遍历
    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[fast] != nums[slow]) { //如果相等就不执行，快指针一直像前移动，当不相等时，慢指针前进一位，将该位赋值为新元素
            slow++;
            nums[slow] = nums[fast];
        }
    }
    return slow + 1;
};