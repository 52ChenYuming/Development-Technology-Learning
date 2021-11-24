/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let ans = [];
    const length = nums.length;
    // 当数组不存在或者长度小于3时，直接返回[]
    if (!nums || length < 3) {
        return ans;
    }
    nums.sort((a, b) => a - b); //按照从小到大排序
    for (let i = 0; i < length; i++) {
        //当前数大于0，则三数之和一定大于0，直接退出循环返回ans
        if (nums[i] > 0) {
            break;
        }
        //当前数和前一个相同，去除重复元素进入下一次循环
        if (nums[i - 1] === nums[i]) {
            continue;
        }
        let left = i + 1; //左指针
        let right = length - 1; //右指针
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]; //三数之和
            if (sum === 0) {
                ans.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++; //去重
                while (left < right && nums[right] === nums[right - 1]) right--; //去重
                left++;
                right--;
            } else if (sum > 0) {
                right--;
            } else {
                left++;
            }
        }
    }
    return ans;
};