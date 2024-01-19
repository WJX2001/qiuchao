var oddEvenList = function (head) {
  if (head === null) {
    return head
  }
  let odd = head
  let even = head.next

  let evenHead = even

  while (even !== null && even.next !== null) {
    odd.next = even.next
    odd = odd.next
    even.next = odd.next
    even = even.next
  }
  odd.next = evenHead
  return head
}


class ListNode {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}


const testFunc = () => {
  let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
  printList(oddEvenList(head)) // 1 3 5 2 4
}


function printList (head) {
  let current = head
  while (current !== null) {
    process.stdout.write(`${current.val} `)
    current = current.next
  }
}

testFunc()