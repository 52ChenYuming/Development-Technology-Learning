/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//排序＋双指针法
var intersect = function(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    //设置双指针
    let p1 = 0,
        p2 = 0;
    let res = [];
    while (p1 < nums1.length && p2 < nums2.length) {
        if (nums1[i] == nums2[j]) {
            res.push(nums1[i])
            i++;
            j++;
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else j++;
    }
    return res;
};