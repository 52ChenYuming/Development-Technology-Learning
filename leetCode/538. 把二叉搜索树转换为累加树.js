var convertBST = function (root) {
  let sum = 0;
  // 中序遍历
  const inOrder = root => {
    if (!root) return;
    // 访问右节点
    inOrder(root.right);
    // 将比root右边结点的值及自己加到sum中
    sum += root.val;
    // 变换值
    root.val = sum;
    // 遍历左节点
    inOrder(root.left);
  };

  inOrder(root);
  return root;
};
