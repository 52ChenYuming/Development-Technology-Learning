// // 暴力解法出现错误， 不知道错误原因
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maxSubArray = function(nums) {
//     let max = -Number.MAX_VALUE;
//     for (let i = 0; i < nums.length; i++) {
//         let sum = 0;
//         for (let j = i; j < nums.length; j++) {
//             sum += nums[j];
//             if (sum > max) {
//                 max = sum;
//             }
//         }
//     }
//     return max;
// };

//动态规划
// 这道题可以这么想： 1. 假如全是负数， 那就是找最大值即可， 因为负数肯定越加越大。 2. 如果有正数， 则肯定从正数开始计算和， 不然前面有负值， 和肯定变小了， 所以从正数开始。 3. 当和小于零时， 这个区间就告一段落了， 然后从下一个正数重新开始计算(也就是又回到 2 了)。 而 dp 也就体现在这个地方。

var maxSubArray = function(nums) {
    let ans = nums[0];
    let sum = 0;
    for (const num of nums) {
        if (sum > 0) {
            sum += num;
        } else {
            sum = num;
        }
        ans = Math.max(ans, sum);
    }
    return ans;
};