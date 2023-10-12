function reverseKGroup(head, k) {
  // write code here
  if (head === null) {
    return null
  }

  let a = head,
    b = head
  for (let i = 0; i < k; i++) {
    if (b === null) {
      return head
    }
    b = b.next
  }
  let newHead = reverse(a, b)
  a.next = reverseKGroup(b, k)
  return newHead
}

const reverse = (a, b) => {
  let pre = null,
    cur = a,
    nxt = a
  while (cur !== b) {
    nxt = cur.next
    cur.next = pre

    pre = cur
    cur = nxt
  }
  return pre
}
