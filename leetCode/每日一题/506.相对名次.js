/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const model = ['Gold Medal', 'Silver Medal', 'Bronze Medal'];
  const map = new Map();
  const ans = new Array(score.length);
  for (let i = 0; i < score.length; i++) {
    // 将分数对应索引下标存入map中
    map.set(score[i], i)
  }
  // 将分数从小到大排序
  score.sort((a, b) => b - a);
  for (let i = 0; i < score.length; i++) {
    let rank = i < 3 ? model[i] : (i + 1) + "";
    // 在该元素原来位置写入名次
    ans[map.get(score[i])] = rank;
  }
  return ans;
};