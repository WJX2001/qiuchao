function removeNthFromEnd(head, n) {
  // write code here

  function findNode(head, k) {
    let p1 = head
    for (let i = 0; i < k; i++) {
      p1 = p1.next
    }
    let p2 = head
    while (p1 !== null) {
      p2 = p2.next
      p1 = p1.next
    }
    return p2
  }

  // 要想删除 倒数第 n个节点 需要找到倒数第 n+1个节点
  let dummy = new ListNode(-1)
  dummy.next = head

  let x = findNode(dummy, n + 1)
  x.next = x.next.next
  return dummy.next
}
