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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) return null;
  // 找到了相同值的结点
  if (root.val === key) {
    // 情况一：左节点不存在，右节点顶替其位置
    if (!root.left) return root.right;
    // 情况二：右节点不存在，左节点顶替其位置
    else if (!root.right) return root.left;
    // 情况三：左右结点都有
    else {
      // 找到key的右节点
      let cur = root.right;
      // 找到右结点的最左边结点
      while (cur.left) {
        cur = cur.left
      }
      // 将最右边结点接上key结点的左节点
      cur.left = root.left;
      // 将key替换为它的右节点
      root = root.right;
      return root;
    }
  }
  // 当前结点比key大，往左边找
  if (root.val > key) root.left = deleteNode(root.left, key);
  // 当前结点比key小，往右边找
  if (root.val < key) root.right = deleteNode(root.right, key);
  return root;
};