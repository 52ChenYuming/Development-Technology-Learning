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

// 方法一：
// var preorderTraversal = function(root) {
//     let res = [];
//     const dfs = function(root) {
//         if (!root) {
//             return;
//         }
//         //将根结点存入数组中
//         res.push(root.val);
//         //遍历左节点
//         dfs(root.left);
//         // 遍历右节点
//         dfs(root.right);
//     }
//     dfs(root);
//     return res;
// };

// 方法二：

前序遍历:

    var preorderTraversal = function(root, res = []) {
        if (!root) return res;
        res.push(root.val);
        preorderTraversal(root.left, res)
        preorderTraversal(root.right, res)
        return res;
    };

中序遍历:

    var inorderTraversal = function(root, res = []) {
        if (!root) return res;
        inorderTraversal(root.left, res);
        res.push(root.val);
        inorderTraversal(root.right, res);
        return res;
    };

后序遍历:

    var postorderTraversal = function(root, res = []) {
        if (!root) return res;
        postorderTraversal(root.left, res);
        postorderTraversal(root.right, res);
        res.push(root.val);
        return res;
    };