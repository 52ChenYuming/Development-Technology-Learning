var hasCycle = function (head) {
  if (!head) return false;
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next
    if (slow === fast) return true;
  }
  return false;
};