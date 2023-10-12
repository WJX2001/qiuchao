function addInList(head1, head2) {
  // write code here
  // 存入栈中
  let stk1 = []
  while (head1 !== null) {
    stk1.push(head1.val)
    head1 = head1.next
  }
  let stk2 = []
  while (head2 !== null) {
    stk2.push(head2.val)
    head2 = head2.next
  }

  // 虚拟头节点
  let dummy = new ListNode(-1)
  let carry = 0

  while (stk1.length !== 0 || stk2.length !== 0 || carry > 0) {
    let val = carry
    if (stk1.length !== 0) {
      val += stk1.pop()
    }
    if (stk2.length !== 0) {
      val += stk2.pop()
    }

    carry = Math.floor(val / 10)
    val = val % 10

    const newNode = new ListNode(val)
    newNode.next = dummy.next
    dummy.next = newNode
  }
  return dummy.next
}

class ListNode {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

const list1 = new ListNode(9, new ListNode(3, new ListNode(7)))
const list2 = new ListNode(6, new ListNode(3))

const result = addInList(list1, list2)

console.log(result)

function printList(head) {
  const result = []
  let current = head
  while (current !== null) {
    result.push(current.val)
    current = current.next
  }
  console.log(result)
}

printList(result)
