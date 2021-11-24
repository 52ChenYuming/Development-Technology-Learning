/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let fast = head,
        slow = head;
    //快指针前进n步,fast-slow = n
    while (n--) {
        fast = fast.next;
    }
    //提前判断fast此时是否为空，如果为空则说明要删除
    if (!fast) return head.next;
    //将fast指向最后一个元素
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return head;
};