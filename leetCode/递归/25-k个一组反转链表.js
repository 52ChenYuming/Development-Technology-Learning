/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  // 反转链表函数
  var reverseList = function (a, b) {
    let pre, cur, nxt;
    pre = null;
    cur = a;
    nxt = a;
    // 进行的操作是每次循环将cur->pre，注意b的方向没有改变
    while (cur != b) {
      // 保存a的下一个值next
      nxt = cur.next;
      // 将cur指向上一个值pre（反转指向）
      cur.next = pre;
      // 将pre赋予当前值，当做下一次循环的pre
      pre = cur;
      // 将cur赋予新值，用于下一次循环的cur
      cur = nxt;
    }
    // 返回的pre是b结点前一个节点，改变了方向
    return pre;
  }
  //main步骤
  if (!head) {
    return null;
  }
  let a = head;
  let b = head;
  // 区间[a,b)包含k个元素
  for (i = 0; i < k; i++) {
    //剩余的结点数不足k个，反转结束
    if (b == null) {
      return head;
    } else {
      b = b.next;
    }
  }
  //反转前k个元素
  let newHead = reverseList(a, b);
  a.next = reverseKGroup(b, k);
  return newHead;
};