/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const arr = [];
  if (nums.length < 4) {
    return arr;
  }
  nums.sort((x, y) => x - y);
  const length = nums.length;
  for (let i = 0; i < length - 3; i++) {
    //这个数不能与前一个数相等，否则没有意义
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    //最小的3个加起来都比目标值大，不用继续比较了
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
      break;
    }
    //后面最大的3个加起来都比目标值小，进入下一次循环增加i
    if (nums[i] + nums[length - 3] + nums[length - 2] + nums[length - 1 < target] < target) {
      continue;
    }
    for (let j = i + 1; j < length - 2; j++) {
      //这个数不能与前一个数相等，否则没有意义,相同进入下一次循环
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) {
        break;
      }
      if (nums[i] + nums[j] + nums[length - 2] + nums[length - 1] < target) {
        continue;
      }
      let left = j + 1;
      let right = length - 1;
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          arr.push([nums[i], nums[j], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          left++;
          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return arr;
};