

var pairSum = function (head) {
  let slow = head
  let fast = head

  let stack = []
  while (fast?.next) {
    stack.push(slow.val)
    slow = slow.next
    fast = fast.next.next
  }
  let res = 0
  // 第二阶段
  while (slow) {
    res = Math.max(res, slow.val + stack.pop())
    slow = slow.next
  }
  return res

}

class LinkList {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

const testFunc = () => {
  const head = new LinkList(4, new LinkList(2, new LinkList(2, new LinkList(3))))
  console.log(pairSum(head))
}

testFunc()

const printFunc = (head) => {
  let current = head
  while (current) {
    console.log(current.val)
    current = current.next
  }
}