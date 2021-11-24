/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2); //用(left+right)/2时可能会发生溢出，整数型是有范围的
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1; //因为mid不是target所以可以排除，从mid右边一个开始找,所以要加一
        } else if (nums[mid] > target) {
            right = mid - 1; //因为mid不是target所以可以排除，从mid左边一个开始找，所以要减一
        }
    }
    return -1;
};