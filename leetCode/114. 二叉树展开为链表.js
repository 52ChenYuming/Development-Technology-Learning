var flatten = function (root) {
  // 先序遍历函数
  var PreTraversal = function (root, list) {
    if (!root) return;
    list.push(root);
    PreTraversal(root.left, list);
    PreTraversal(root.right, list);
  };
  // 将二叉树展开为链表
  let list = [];
  PreTraversal(root, list);
  for (let index = 1; index < list.length; index++) {
    const node = list[index - 1];
    node.left = null;
    node.right = list[index];
  }
};
