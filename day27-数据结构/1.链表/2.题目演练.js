


// let p = a
// while (p) {
//   console.log(p.val)
//   p = p.next
// }

// TODO: 删除链表中的节点
// const deleteNode = (node) => {
//   if (node === null || node.next === null) {
//     // 无法删除最后一个节点或者空节点
//     return false
//   }
//   // 把当前链表的指针指向下下个链表的值就可以了
//   node.val = node.next.val
//   node.next = node.next.next
//   return true
// }

// console.log(deleteNode(b))
// let p = a
// while (p) {
//   console.log(p.val)
//   p = p.next
// }

var deleteMiddle = function (head) {
  if (!head.next) {
    return null
  }

  let slow = head, fast = head
  let ans
  while (fast && fast.next) {
    ans = slow
    slow = slow.next
    fast = fast.next.next
  }
  ans.next = ans.next.next
  return head
}

// 测试写法以
let a = {
  val: 1
}

let b = {
  val: 3
}

let c = {
  val: 4
}

let d = {
  val: 7
}

let e = {
  val: 1
}

let f = {
  val: 2
}

let g = {
  val: 6
}

a.next = b
b.next = c
c.next = d
d.next = e
e.next = f
f.next = g

deleteMiddle(a)

let p = a
while (p) {
  console.log(p.val)
  p = p.next
}


// 第二种测试写法
class ListNode {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

function testDeleteMiddle () {
  let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))

  console.log(head, '原始链表')
  head = deleteMiddle(head)
  printList(head)

}

function printList (head) {
  let current = head
  let res = ''
  while (current) {
    res = current.value + res + '->'
    current = current.next
  }
  res += null
  console.log(res)

}

testDeleteMiddle()