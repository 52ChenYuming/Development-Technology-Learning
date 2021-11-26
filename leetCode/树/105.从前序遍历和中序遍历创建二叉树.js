/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = (preorder, inorder) => {
  if (preorder.length == 0) return null;
  // 根结点是先根遍历的第一个结点
  const root = new TreeNode(preorder[0]);
  // 中间结点的索引
  const mid = inorder.indexOf(preorder[0]);
  // 由先序和中序确定左子树
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  // 由先序和中序确定右子树
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
  // 返回根结点
  return root;
};
