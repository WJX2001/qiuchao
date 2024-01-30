var removeNthFromEnd = function (head, n) {

  let dummy = new LinkList(-1)
  dummy.next = head
  let x = findNode(dummy, n + 1)
  x.next = x.next.next
  return dummy.next

}

function findNode (head, k) {
  let fast = head
  for (let i = 0; i < k; i++) {
    fast = fast.next
  }

  let slow = head
  while (fast) {
    fast = fast.next
    slow = slow.next
  }
  return slow
}




class LinkList {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}


const printFunc = (head) => {
  let current = head
  while (current) {
    console.log(current.val)
    current = current.next
  }
}

const testFunc = () => {
  const head = new LinkList(1, new LinkList(2, new LinkList(3, new LinkList(4, new LinkList(5)))))
  printFunc(removeNthFromEnd(head, 2))
}

testFunc()

