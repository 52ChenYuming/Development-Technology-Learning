// 方法一：递归(超时)
var rob = function (root) {
  if (!root) return 0;
  // 第一层开始的收益，最少是root.val
  let rootMoney = root.val;
  if (root.left) {
    rootMoney += rob(root.left.left) + rob(root.left.right);
  }
  if (root.right) {
    rootMoney += rob(root.right.left) + rob(root.right.right);
  }
  // 第二层开始的收益
  const secondRootMoney = rob(root.left) + rob(root.right);
  return Math.max(rootMoney, secondRootMoney);
};
// 方法二：记忆化递归
var rob = function (root) {
  const map = new Map();
  const helper = root => {
    if (!root) return 0;
    if (map.has(root)) return map.get(root);

    let rootMoney = root.val;
    if (root.left) {
      rootMoney += helper(root.left.left) + helper(root.left.right);
    }
    if (root.right) {
      rootMoney += helper(root.right.left) + helper(root.right.right);
    }

    let secondMoney = helper(root.left) + helper(root.right);
    const res = Math.max(rootMoney, secondMoney);
    map.set(root, res);
    return res;
  };
  return helper(root);
};
