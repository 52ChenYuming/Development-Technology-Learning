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
 * @return {boolean}
 */

// 方法一：遍历一遍数组，用hashset存储出现的元素，判断set中是否有匹配项
var findTarget = function(root, k) {
    if (!root) {
        return fasle;
    }
    const set = new Set();
    const find = (root) => {
        if (!root) {
            return false;
        }
        if (set.has(k - root.val)) {
            return true;
        }
        set.add(root.val);
        return find(root.left) || find(root.right);
    }
    return find(root);
};