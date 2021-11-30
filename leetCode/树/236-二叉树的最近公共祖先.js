/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // 递归边界
  if (!root) return null;
  // 如果根结点是p或者q，则直接返回根结点
  if (root === p || root === q) return root;
  // 分解为左子树和右子树的子问题
  const leftNode = lowestCommonAncestor(root.left, p, q);
  const rightNode = lowestCommonAncestor(root.right, p, q);
  // 如果左右子树都有，则返回找到了目标root
  if (leftNode && rightNode) return root;
  // 左子树没有，跳转到右子树
  if (!leftNode) return rightNode;
  return leftNode;
};