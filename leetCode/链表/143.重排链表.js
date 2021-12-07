/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
// 本题运用到了较多的知识点：
// 1): 题876.链表的中间结点
// 2): 题206.反转链表
// 3): 合并链表

//寻找链表中间结点函数
const middleNode = function (head) {
  let slow = head;
  let fast = head;
  // 循环终止条件是快指针下一次移动有值
  while (fast.next != null && fast.next.next != null) {
    // 慢指针移动1
    slow = slow.next;
    // 快指针移动2
    fast = fast.next.next;
  }
  return slow;
}

// 链表反转函数
const reverseList = function (head) {
  let pre = null;
  let cur = head;
  let next = head;
  // 反转结束条件
  while (cur != null) {
    // 对next赋值
    next = cur.next;
    // 反转链表
    cur.next = pre;
    // 下一次循环的pre
    pre = cur;
    // 下一次循环的cur
    cur = next;
  }
  // 此时的pre是反转后的第一个结点
  return pre;
}

// 合并链表函数
const mergeList = function (l1, l2) {
  while (l1 && l2) {
    //创建两个临时节点保留next值
    temp1 = l1.next;
    temp2 = l2.next;
    // 合并链表
    l1.next = l2;
    l1 = temp1;
    l2.next = l1;
    l2 = temp2;
  }
}


var reorderList = function (head) {
  if (!head) {
    return null;
  }
  let mid = middleNode(head);
  // l1表示前半部分
  let l1 = head;
  // l2表示后半部分
  let l2 = mid.next;
  mid.next = null;
  // 反转l2
  l2 = reverseList(l2);
  mergeList(l1, l2);
};