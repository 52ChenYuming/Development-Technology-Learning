/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 不存在或者长度小于3直接返回空数组
  if (!nums || nums.length < 3) return []
  nums = nums.sort((a, b) => a - b)
  let ans = []
  let len = nums.length
  // 第一个固定住的元素
  for (let i = 0; i < len; i++) {
    // 减枝，如果当前元素大于0，后面肯定大于0，停止循环；如果当前元素和上一个相同，跳过当前元素进入下一个防止重复计算
    if (nums[i] > 0) break
    if (nums[i - 1] === nums[i]) continue
    let left = i + 1
    let right = len - 1
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      if (sum === 0) {
        ans.push([nums[i], nums[left], nums[right]])
        while (left < right && nums[left] === nums[left + 1]) {
          left++
        }
        while (left < right && nums[right] === nums[right--]) {
          right--
        }
        left++
        right--
      } else if (sum > 0) {
        right--
      } else {
        left++
      }
    }
  }
  return ans
};
threeSum([-1,0,1,2,-1,-4])