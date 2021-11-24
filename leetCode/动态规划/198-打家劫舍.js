/**
 * @param {number[]} nums
 * @return {number}
 */
//动态规划
// f（n） = max（f（n-1），f（n-2）+n）
var rob = function(nums) {
    if (nums == null || nums.length == 0) {
        return 0;
    }
    if (nums.length === 1)
        return nums[0];
    const dp = [];
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }
    return dp[nums.length - 1];
};