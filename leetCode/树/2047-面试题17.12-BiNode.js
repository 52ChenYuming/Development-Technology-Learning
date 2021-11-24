/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBiNode = function(root) {
    let dummy = new TreeNode(-1); //设置一个哑结点作为头结点
    let pre = dummy; //将哑结点引用给pre结点
    var dfs = function(root) {
        if (!root) {
            return;
        }
        dfs(root.left); //一直向左边查找结点
        pre.right = root; //将root最小的结点赋值为哑结点的右节点
        root.left = null; //将左节点置空
        pre = pre.right; //指针向右走
        dfs(root.right);
    }
    dfs(root);
    return dummy.right;
};