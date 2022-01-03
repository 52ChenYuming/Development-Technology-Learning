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
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  function dfs(root, preSum) {
    if (!root) return 0;
    // 将当前节点最长前缀和加入哈希表
    map.set(preSum, (map.get(preSum) || 0) + 1);
    // 当前节点最长前缀和和当前节点的值的和
    let target = preSum + root.val;
    // 当前节点的前缀和中有这个值，路径数量+1（数学稍微变形，prefix(x) - targetSum == prefix(y)）
    ans += map.get(target - targetSum) || 0;
    // 向下
    dfs(root.left, target);
    dfs(root.right, target);
    // 遍历完后，因为路径只能向下，所以要销毁当前前缀和，防止出现通过根结点到左右子树的路径
    map.set(preSum, map.get(preSum) - 1);
  }
  let map = new Map();
  let ans = 0;
  dfs(root, 0);
  return ans;
};
