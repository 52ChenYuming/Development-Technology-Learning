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
 * @param {number} k
 * @return {number}
 */
// 递归一：用栈存储元素
var kthSmallest = function (root, k) {
  let res = [];
  function dfs(root) {
    if (!root) return;
    dfs(root.left);
    res.push(root.val);
    dfs(root.right);
  }
  dfs(root);
  return res[k - 1];
};

// 递归二：不访问所有元素，访问到就停止
var kthSmallest = function (root, k) {
  let res;
  function dfs(root) {
    // 当结点存在且还没到第k个元素时
    if (root && k > 0) {
      // 先访问左边结点
      dfs(root.left);
      // 访问中间结点的操作
      if (--k === 0) {
        return res = root.val;
      }
      // 访问右边结点
      dfs(root.right);
    }
  }
  dfs(root);
  return res;
}