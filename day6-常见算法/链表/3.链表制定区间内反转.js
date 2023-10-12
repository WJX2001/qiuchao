var reverseBetween = function (head, left, right) {
  // 首先实现 翻转N
  let successor = null

  const reverseN = (head, n) => {
    if (n === 1) {
      successor = head.next
      return head
    }

    let last = reverseN(head.next, n - 1)
    head.next.next = head
    head.next = successor
    return last
  }

  if (left === 1) {
    return reverseN(head, right)
  }

  head.next = reverseBetween(head.next, left - 1, right - 1)
  return head
}
