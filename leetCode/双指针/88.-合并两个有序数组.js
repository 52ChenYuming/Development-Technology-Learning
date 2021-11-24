/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let p1 = 0;
  let p2 = 0;
  const arr = new Array(m + n).fill(0);
  let temp;
  while (p1 < m || p2 < n) {
    if (p1 === m) {
      temp = nums2[p2++];
    } else if (p2 === n) {
      temp = nums1[p1++];
    } else if (nums1[p1] < nums2[p2]) {
      temp = nums1[p1++];
    } else {
      temp = nums2[p2++];
    }
    arr[p1 + p2 - 1] = temp;
  }
  for (let i = 0; i < m + n; i++) {
    nums1[i] = arr[i];
  }
};
