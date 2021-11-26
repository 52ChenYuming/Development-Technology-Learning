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
// 基础解法
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
// 时间和空间优化
// const buildTree = (preorder, inorder) => {
//   const map = new Map();
//   for (let i = 0; i < inorder.length; i++) {
//     map.set(inorder[i], i);
//   }
//   const helper = (p_start, p_end, i_start, i_end) => {
//     if (p_start > p_end) return null;
//     let rootVal = preorder[p_start];    // 根节点的值
//     let root = new TreeNode(rootVal);   // 根节点
//     let mid = map.get(rootVal);         // 根节点在inorder的位置
//     let leftNum = mid - i_start;        // 左子树的节点数
//     root.left = helper(p_start + 1, p_start + leftNum, i_start, mid - 1);
//     root.right = helper(p_start + leftNum + 1, p_end, mid + 1, i_end);
//     return root;
//   };
//   return helper(0, preorder.length - 1, 0, inorder.length - 1);
// };

