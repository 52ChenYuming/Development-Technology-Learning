// 方法一： 深度优先遍历DFS
var maxDepth = function(root) {
    if (!root) {
        return 0;
    } else {
        const left = maxDepth(root.left);
        const right = maxDepth(root.right);
        return Math.max(left, right) + 1;
    }
};

//方法二： 广度优先遍历BFS
var maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    let count = 0;
    const queue = [root]; //初始队列为root
    while (queue.length) {
        let size = queue.length;
        count++; //将当前层级的结点数加到count中
        while (size--) {
            let node = queue.shift();
            node.left && queue.push(node.left); //当左节点存在时，将左节点加入队列
            node.right && queue.push(node.right); //当右节点存在时，将右节点加入队列
        }
    }
    return count;
}