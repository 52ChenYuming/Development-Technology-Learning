/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  if (!intervals.length) {
    return 0;
  }
  intervals.sort((a, b) => a[1] - b[1]);

  const n = intervals.length;//有多少个区间
  let right = intervals[0][1];//左区间
  let ans = 1;
  for (let i = 1; i < n; i++) {
    if (intervals[i][0] >= right) {//如果比用来比较的右区间大的话，则该区间不用被移除，用该区间当场比较区间
      ++ans;
      right = intervals[i][1];
    }
  }
  return n - ans;
};