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
var middleNode = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let count = 0;
  let ans = head;
  let cur = head;
  while (ans) {
    ans = ans.next;
    count++;
  }
  let mid = Math.floor(count / 2);
  for (let i = 0; i < mid; i++) {
    cur = cur.next;
  }
  return cur;
};