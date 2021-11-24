/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// 方法一：同步遍历法，如果两个链表长度不相等，当有一个链表为空时，就转到另一个链表，相当于两个链表都遍历，ru这样两个指针遍历长度就相同了，我们可以找到相交点，如果不相交，最后链表会同时为空，结束循环
// var getIntersectionNode = function (headA, headB) {
//   let pA = headA;
//   let pB = headB;
//   while (pA || pB) {
//     if (pA === pB) {
//       return pA;
//     }
//     pA = !pA ? headB : pA.next;
//     pB = !pB ? headA : pB.next;
//   }
//   return null;
// };

// 方法二：哈希map遍历两个链表
var getIntersectionNode = function (headA, headB) {
  const visited = new Set();
  let temp = headA;
  while (temp) {
    visited.add(temp);
    temp = temp.next;
  }
  temp = headB;
  while (temp) {
    if (visited.has(temp)) {
      return temp;
    }
    temp = temp.next;
  }
  return null;
}