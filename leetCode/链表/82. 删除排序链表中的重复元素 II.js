// 当头节点可能会被修改时，我们会需要一个哑结点保存链表
var deleteDuplicates = function (head) {
  if (!head) return null;
  // 设置一个dummy假结点
  const dummy = new ListNode(0, head);
  // 当前指针
  let cur = dummy;
  // 当下一个节点存在，且删除节点后要链接的节点存在
  while (cur.next && cur.next.next) {
    // 如果节点值相等
    if (cur.next.val == cur.next.next.val) {
      // 记录这个值
      const x = cur.next.val;
      // 删除后还有下一个节点才能判断值是否还相等，所以要先判断cur.next==null;
      while (cur.next && cur.next.val == x) {
        cur.next = cur.next.next;
      }
    } else {
      cur = cur.next;
    }
  }
  return dummy.next;
}