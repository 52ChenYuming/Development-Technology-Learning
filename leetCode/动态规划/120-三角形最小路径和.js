/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const bottom = triangle[triangle.length - 1];
    const dp = new Array(bottom.length); //最大长度是三角形底部长度

    for (let i = 0; i < dp.length; i++) { //对最后一行dp数组进行赋值
        dp[i] = bottom[i];
    }
    for (let i = dp.length - 2; i >= 0; i--) { //控制行，从倒数第二行开始
        for (let j = 0; j < triangle[i].length; j++) { //动态规划最小的
            dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
        }
    }
    return dp[0];
};