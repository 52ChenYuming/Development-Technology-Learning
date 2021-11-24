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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // 定义一个深度优先搜索函数
    const dfs = function(left, right) {
        // 左右结点都不存在肯定对称返回真
        if (!left && !right) {
            return true;
        }
        // 两个结点有一个不存在返回假
        else if (!left || !right) {
            return false;
        }
        // 两个结点不相等返回假
        else if (left.val != right.val) {
            return false;
        }
        // 对左节点的左孩子和右节点的右孩子进行比较，对左节点的右孩子和右节点的左孩子进行比较
        return dfs(left.left, right.right) && dfs(left.right, right.left);
    };
    //主函数代码如下
    //根结点不存在直接返回真
    if (!root) {
        return true;
    }
    return dfs(root.left, root.right);
};