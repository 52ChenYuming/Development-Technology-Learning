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
var reverseList = function(head) {
    //当前头结点为空或下一个头结点为空时停止递归
    if (!head || !head.next) {
        return head;
    }
    let cur = new ListNode();
    //cur一定是最后一个节点
    cur = reverseList(head.next);
    head.next.next = head;
    //防止生成循环链表
    head.next = null;
    //每层递归都返回cru，也就是最后一个节点
    return cur;
};