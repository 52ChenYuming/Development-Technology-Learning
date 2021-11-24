// var mergeTwoLists = function(l1, l2) {
//     if (l1 === null)
//         return l2;
//     else if (l2 === null)
//         return l1;
//     else if (l1.val < l2.val) {
//         l1.next = mergeTwoLists(l1.next, l2);
//         return l1;
//     } else {
//         l2.next = mergeTwoLists(l1, l2.next);
//         return l2;
//     }
// };

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
var mergeTwoLists = function (l1, l2) {
  const dummy = new ListNode(0);
  cur = dummy.next;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      cur = l1;
      l1 = l1.next;
    } else {
      cur = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  cur = l1 ? l1 : l2;
  return dummy.next;
};