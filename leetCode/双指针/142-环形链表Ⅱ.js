/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//方法一：哈希表
// var detectCycle = function (head) {
//   const visited = new Set();
//   // 节点存在就继续循环
//   while (head) {
//     // 发现之前存在的结点就返回当前节点
//     if (visited.has(head)) {
//       return head;
//     }
//     // 没有就添加进入哈希表中
//     visited.add(head);
//     head = head.next;
//   }
//   return null;
// };

// 方法二：快慢指针
var detectCycle = function (head) {
  let slow = head;
  let fast = head;
  while (fast) {
    if (fast.next == null) { // fast.next走出链表了，说明无环
      return null;
    }
    slow = slow.next;        // 慢指针走一步
    fast = fast.next.next;   // 慢指针走一步
    if (slow == fast) {      // 首次相遇
      fast = head;           // 让快指针回到头节点
      while (true) {         // 开启循环，让快慢指针相遇
        if (slow == fast) {  // 相遇，在入环处
          return slow;
        }
        slow = slow.next;
        fast = fast.next;    // 快慢指针都走一步
      }
    }
  }
  return null;
};
