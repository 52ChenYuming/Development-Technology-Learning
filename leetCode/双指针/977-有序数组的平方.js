/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let arr = [];
    for (let i = 0, j = nums.length - 1; i <= j;) {
        let left = Math.abs(nums[i]);
        let right = Math.abs(nums[j]);
        if (right > left) {
            arr.unshift(right * right);
            j--;
        } else {
            arr.unshift(left * left);
            i++;
        }
    }
    return arr;
};