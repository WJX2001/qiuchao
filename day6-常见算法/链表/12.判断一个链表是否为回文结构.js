function isPail(head) {
  // write code here

  let slow = head,
    fast = head
  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }
  if (fast) {
    slow = slow.next
  }

  let left = head
  let right = reverse(slow)

  while (right) {
    if (left.val !== right.val) {
      return false
    }
    left = left.next
    right = right.next
  }
  return true
}

const reverse = (head) => {
  let pre = null,
    cur = head,
    nxt = head
  while (cur !== null) {
    nxt = cur.next
    cur.next = pre

    pre = cur
    cur = nxt
  }
  return pre
}
