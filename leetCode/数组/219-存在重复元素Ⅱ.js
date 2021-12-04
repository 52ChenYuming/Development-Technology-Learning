/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// 方法： 哈希set
// hashSet的大小始终设置为k， 大于k就删除第一个元素， 可以理解为设置一个大小为k的滑动窗口， 当新元素加入时存在该元素， 说明距离小于等于k
var containsNearbyDuplicate = function(nums, k) {
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return true;
        }
        set.add(nums[i]);
        if (set.size > k) {
            set.delete(nums[i - k]);
        }
    }
    return false;
};