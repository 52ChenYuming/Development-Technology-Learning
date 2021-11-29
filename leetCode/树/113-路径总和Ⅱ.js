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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  // 返回所有路径
  let resPath = [];
  // 当前路径
  let curPath = [];
  // 递归函数
  const traveltree = function (node, remainDistance) {
    // 当前结点放入当前路径
    curPath.push(node.val);
    // 剩余距离
    remainDistance -= node.val;
    if (!node.left && !node.right && remainDistance == 0) resPath.push([...curPath]);
    // 左子树存在，往左继续遍历
    node.left && traveltree(node.left, remainDistance);
    // 右子树存在，往右继续遍历
    node.right && traveltree(node.right, remainDistance);
    // 上面执行完毕发现都不符合，回溯
    let cur = curPath.pop();
    remainDistance -= cur;
  }
  if (!root)
    return [];
  traveltree(root, targetSum);
  return resPath;
};
pathSum([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1], 22);