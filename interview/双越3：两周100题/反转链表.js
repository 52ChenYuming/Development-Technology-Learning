var reverseList = function(head) {
  let prev = null
  let cur = head
  while(cur) {
    const next = cur.next;
    cur.next = prev // 改变指向
    prev = cur
    cur = next
  }
  return prev
};