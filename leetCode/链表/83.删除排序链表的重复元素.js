var deleteDuplicates = function (head) {
  // 保存头节点
  let cur = head;
  // 结点不存在返回空
  if (!head) return null;
  // 当前节点存在且下一个节点存在
  while (cur && cur.next) {
    // 如果当前节点和下一个节点的值相等
    if (cur.val == cur.next.val) {
      // 删除下一个节点
      cur.next = cur.next.next;
    } else {
      // 不相等则进入下一个节点
      cur = cur.next;
    }
  }
  return head;
};