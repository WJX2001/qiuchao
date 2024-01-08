let a = {
  val: 'A'
}

let b = {
  val: 'B'
}

let c = {
  val: 'C'
}

let d = {
  val: 'D'
}


a.next = b
b.next = c
c.next = d


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
let p = a
while (p) {
  console.log(p.val)
  p = p.next
}