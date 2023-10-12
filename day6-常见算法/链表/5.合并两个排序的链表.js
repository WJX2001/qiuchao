function Merge(pHead1, pHead2) {
  // write code here
  let dummy = new ListNode(-1),
    p = dummy
  let p1 = pHead1,
    p2 = pHead2

  while (p1 !== null && p2 !== null) {
    if (p1.val > p2.val) {
      p.next = p2
      p2 = p2.next
    } else {
      p.next = p1
      p1 = p1.next
    }
    p = p.next
  }

  if (p1 !== null) {
    p.next = p1
  }
  if (p2 !== null) {
    p.next = p2
  }
  return dummy.next
}
