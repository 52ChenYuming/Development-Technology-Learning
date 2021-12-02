/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
// var findJudge = function(n, trust) {
//   // 去相信
//   let attack = Array(n).fill(0);
//   // 被相信
//   let accept = Array(n).fill(0);
//   for(let [a,b] of trust){
//     attack[a-1]++;
//     accept[b-1]++;
//   }
//   for(let i=0 ;i<n;i++){
//     // 被所有人相信，但是自己不信任所有人
//     if(attack[i]==0&&accept[i]==n-1){
//       return i+1;
//     }
//   }
//   return -1;
// };

// 图论：法官的入度为n-1，出度为0
var findJudge = function (n, trust) {
  // 只有一个人
  if (n === 1) return n;
  // 初始化出度数组，默认不相信别人
  // 设置长度为n+1的数组，我们从1到n比较方便
  const outDegree = new Array(n + 1).fill(false);
  const map = new Map();
  for (const [a, b] of trust) {
    // 如果相信了别人就是false
    outDegree[a] = true;
    // 入度统计
    map.set(b, (map.get(b) || 0) + 1);
  }
  // 寻找出度为0，入度为n-1的点
  for (let i = 1; i <= n; i++) {
    if (!outDegree[i] && map.get(i) === n - 1) return i;
  }
  return -1;
}