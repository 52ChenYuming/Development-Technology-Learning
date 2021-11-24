/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  //不存在就返回空
  if (!head) {
    return null;
  }
  const dummy = new ListNode(0, head);
  //当前指针
  let cur = dummy;
  while (cur.next && cur.next.next) {
    //当前节点等于下一个节点，将当前节点的指针指向下下个节点
    if (cur.next.val == cur.next.next.val) {
      const x = cur.next.val;
      while (cur.next && cur.next.val === x) {
        cur.next = cur.next.next;
      }
    } else {
      cur = cur.next;
    }
  }
  return dummy.next;
};