/**
 * @param {number} n
 * @return {number}
 */

//动态规划法：
// 第n次方法为第n-1次和第n-2次方法和
// f（n）= f（n-1）+ f(n-2);
var climbStairs = function(n) {
    const dp = [];
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};