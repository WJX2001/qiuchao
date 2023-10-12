function hasCycle(head) {
  // write code here
  let fast = head,
    slow = head

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow.next

    if (slow === fast) {
      return true
    }
  }
  return false
}
