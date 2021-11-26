/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length === 0) return null;
  const dfs = function (nums, left, right) {
    // 限定范围
    if (left > right) return null;
    // 找数组中点
    let mid = Math.floor(left + (right - left) / 2);
    // 创建根结点
    let root = new TreeNode(nums[mid]);
    // 左子树
    root.left = dfs(nums, left, mid - 1);
    // 右子树
    root.right = dfs(nums, mid + 1, right);
    return root;
  }
  return dfs(nums, 0, nums.length - 1);
};