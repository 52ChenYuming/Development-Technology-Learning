/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function (n, edges) {
  const res = [];
  // 默认所有结点入度都为0
  const flag = new Array(n).fill(true);
  for ([from, to] of edges) {
    // 结点被访问就说明入度不为0
    flag[to] = false;
  }
  for (let i = 0; i < n; i++) {
    // 入度为0就将其加入结果数组
    flag[i] && res.push(i);
  }
  return res;
};

