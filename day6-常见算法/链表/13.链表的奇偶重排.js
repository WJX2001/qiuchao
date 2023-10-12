function oddEvenList(head) {
  // write code here
  let dummy1 = new ListNode(-1),
    p1 = dummy1
  let dummy2 = new ListNode(-1),
    p2 = dummy2

  let p = head
  let isOdd = true

  while (p) {
    if (isOdd) {
      p1.next = p
      p1 = p1.next
    } else {
      p2.next = p
      p2 = p2.next
    }
    isOdd = !isOdd
    let temp = p.next
    p.next = null
    p = temp
  }
  p1.next = dummy2.next
  return dummy1.next
}
