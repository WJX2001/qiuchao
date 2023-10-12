function ReverseList(head) {
  // write code here
  let pre = null,
    cur = head,
    nxt = head
  while (cur !== null) {
    nxt = cur.next
    cur.next = pre

    // 更新指针位置
    pre = cur
    cur = nxt
  }
  return pre
}
