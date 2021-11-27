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
 * @return {number[]}
 */
var rightSideView = function (root) {
  function dfs(root, depth, res) {
    if (!root) return null;
    // 数组长度等于当前深度时，说明是当前层级第一个访问到的元素，加入数组
    if (res.length == depth) res.push(root.val);
    // 记录当前层级
    depth++;
    dfs(root.right, depth, res);
    dfs(root.left, depth, res);
  }
  if (!root) return [];
  let res = [];
  dfs(root, 0, res);
  return res;
};