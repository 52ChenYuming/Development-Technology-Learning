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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const ret = [], //遍历顺序的结果数组
        queen = []; //队列数组
    if (!root) {
        return ret;
    }
    queen.push(root);
    while (queen.length) {
        let length = queen.length; //队列长度
        let curLevel = []; //存放当前层级的结点
        for (let i = 0; i < length; i++) {
            const node = queen.shift(); //删除队首元素
            curLevel.push(node.val); //存放下一层的结点
            if (node.left) {
                queen.push(node.left);
            }
            if (node.right) {
                queen.push(node.right);
            }
        }
        ret.push(curLevel); //将每一层结点放到结果数组
    }
    return ret;
};