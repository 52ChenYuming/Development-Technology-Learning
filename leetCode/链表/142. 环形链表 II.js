// 方法一：快慢指针

var detectCycle = function (head) {
  if (head === null) return null;
  let slow = head;
  let fast = head;
  // 当快指针存在时，继续循环
  while (fast) {
    // 快指针指向空，说明无环
    if (!fast.next) return null
    slow = slow.next;
    fast = fast.next.next;
    // 快慢指针相遇时，快指针重新回到头节点
    if (slow === fast) {
      fast = head;
      // 下一次相遇时结束循环
      while (fast !== slow) {
        fast = fast.next;
        slow = slow.next;
      }
      return fast;
    }
  }
  return null;
}

// 方法二：哈希表

var detectCycle = function (head) {
  const visited = new Set();
  while (head) {
    if (visited.has(head)) return head;
    else visited.add(head);
    head = head.next;
  }
  return null;
}
