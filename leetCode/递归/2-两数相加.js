/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/**
a.设置一个新链表
b.链表循环相加，考虑进位
c.考虑最后一位
d.返回链表
 */
var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(0);
  let cur = dummy;
  let carry = 0;
  while (carry || l1 || l2) {
    const n1 = l1 ? l1.val : 0;
    const n2 = l2 ? l2.val : 0;
    let sum = (n1 + n2 + carry) % 10;
    carry = Math.floor((n1 + n2 + carry) / 10);
    cur.next = new ListNode(sum);
    cur = cur.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  return dummy.next;
};