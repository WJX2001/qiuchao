// 给出的链表为 1-> 1-> 2   1->2

function deleteDuplicates(head) {
  // write code here
  if (!head) {
    return null
  }
  let cur = head
  while (cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  return head
}
