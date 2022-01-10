var trap = function (height) {
  // 对每一列求解：
  // 看有没有小于两边相对小的那个
  // 小于的话就是左右两边小的那个-当前的
  let sum = 0;
  for (let i = 1; i < height.length; i++) {
    // 找左边最高的
    let max_left = 0;
    for (let left = i - 1; left >= 0; left--) {
      if (height[left] > max_left) {
        max_left = height[left];
      }
    }
    // 找右边最高的
    let max_right = 0;
    for (let right = i + 1; right < height.length; right++) {
      if (height[right] > max_right) {
        max_right = height[right];
      }
    }
    // 找出左右两边哪个小
    let min = Math.min(max_left, max_right);
    // 计算是否可以储水
    if (min > height[i]) {
      sum += min - height[i];
    }
  }
  return sum;
};
