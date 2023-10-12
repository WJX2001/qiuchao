function deleteDuplicates(head) {
  // write code here
  let dummy = new ListNode(-1)
  dummy.next = head
  let p = dummy
  if (!head) {
    return head
  }

  while (p.next && p.next.next) {
    if (p.next.val === p.next.next.val) {
      const x = p.next.val
      while (p.next && p.next.val === x) {
        p.next = p.next.next
      }
    } else {
      p = p.next
    }
  }
  return dummy.next
}

// 只保留原链表中只出现一次的元素
// 1->2->3->3->4->4->5  1->2->5
