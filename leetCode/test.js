// var minArray = function (numbers) {
//   let l = 0
//   let r = numbers.length - 1
//   while (l < r) {
//     let mid = Math.floor((l + r) / 2)
//     if (numbers[mid] > numbers[r]) {
//       l = mid + 1
//     } else {
//       r = mid
//     }
//     console.log(l,r);
//   }
//   return numbers[l]
// };
// minArray([3, 3, 1, 3])

var findMin = function(nums) {
  let left = 0, right = nums.length - 1
  while (left < right) {
      const mid = Math.floor((left + right) / 2)
      if (nums[mid] > nums[right]) left = mid + 1
      else if(nums[mid] < nums)
  }
  return nums[left]
};
findMin([3, 3, 1, 3])