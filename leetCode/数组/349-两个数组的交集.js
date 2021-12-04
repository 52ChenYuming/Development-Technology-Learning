/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    //将短的数组放到nums1
    if (nums1.length < nums2.length) {
        let temp = nums1;
        nums1 = nums2;
        nums2 = temp;
    }
    const nums1Set = new Set(nums1); //将nums1赋值给nums1哈希set
    const resSet = new Set(); //结果哈希set
    for (let i = 0; i < nums2.length; i++) {
        if (nums1Set.has(nums2[i])) {
            resSet.add(nums2[i]);
        }
    }
    return Array.from(resSet);
};