/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  // 结果数组
  const res = [];
  // 数为空返回空数组
  if (!root) return res;
  // 存放当前节点
  let curLevel = [root];
  while (curLevel.length) {
    const nextLevel = [];
    const curVal = [];
    // 遍历
    for (let node of curLevel) {
      curVal.push(node.val);
      // 将下一层节点加入nextLevel
      node.left && nextLevel.push(node.left);
      node.right && nextLevel.push(node.right);
    }
    // 当前层遍历结束，加入结果数组中
    res.push(curVal);
    // 如果是偶数层，就进行反转
    res.length % 2 === 0 && curVal.reverse();
    // 进入下一层遍历，更新当前层信息
    curLevel = nextLevel
  }
  return res;
};