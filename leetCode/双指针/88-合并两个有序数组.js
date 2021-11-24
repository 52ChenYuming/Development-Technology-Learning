/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
//方法一：双指针
// var merge = function (nums1, m, nums2, n) {
//   let p1 = 0;
//   let p2 = 0;
//   const arr = new Array(m + n).fill(0);
//   let temp;
//   while (p1 < m || p2 < n) {
//     if (p1 === m) {
//       temp = nums2[p2++];
//     } else if (p2 === n) {
//       temp = nums1[p1++];
//     } else if (nums1[p1] < nums2[p2]) {
//       temp = nums1[p1++];
//     } else {
//       temp = nums2[p2++];
//     }
//     arr[p1 + p2 - 1] = temp;
//   }
//   for (let i = 0; i < m + n; i++) {
//     nums1[i] = arr[i];
//   }
// };
//方法二：向后插入
var merge = function(nums1, m, nums2, n) {
    let current = m + n - 1; //当前指针位置
    m--;
    n--;
    while (n >= 0) {
        nums1[current--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
        //当n等于0时，证明此时num[0]的位置是正确的不用进行判断了，结束循环
        //当n=0,m=-1时，nums2[n]会得到一个undefined，undefined跟数字进行比较的时候, 会转换成NaN
        //NaN (Not a Number) 跟任何数字进行比较的时候, 都会得到一个 false
        //也就意味着必定进入else, 那我们正好可以把nums2[0] 的值赋给nums1[0], 然后正好结束循环
    }
}