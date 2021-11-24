//问题，为什么第23行是n-m-1而不是n-m+1

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let resrveArray = '';
  for (let i = 0; i < s.length; i++) {
    //当回文串是奇数时
    diffusionFromCenter(i, i);
    // 
    diffusionFromCenter(i, i + 1);
  }

  function diffusionFromCenter(m, n) {
    //当数组没有越界，且左右两边元素相等时，m左移n右移进行循环比较
    while (m >= 0 && n < s.length && s[m] === s[n]) {
      m--;
      n++;
    }
    //若当前回文串长度大于之前的，进行更新
    // 注意此处m,n的值循环完后  是恰好不满足循环条件的时刻
    // 此时m到n的距离为n-m+1，但是mn两个边界不能取 所以应该取m+1到n-1的区间  长度是n-m-1
    if (n - m - 1 > resrveArray.length) {
      resrveArray = s.slice(m + 1, n);
    }
  }
  return resrveArray;
};