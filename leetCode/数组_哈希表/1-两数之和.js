/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 暴力解法
    // for (let i = 0; i < nums.length - 1; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] == target) {
    //             return [i, j];
    //         }
    //     }
    // }
    //hashMap优化解法：
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const result = target - nums[i];
        if (map.has(result)) {
            return [map.get(result), i];
        }
        map.set(nums[i], i);
    }
};
