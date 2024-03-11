/* 
  对任意给定的单链表和一个整数k 找到链表的第n/k个节点 n 为未知的链表长度 节点索引从1开始 
*/


function findKthToTail(head, k) {
  let length = 0

  let current = head
  while(current) {
    length++
    current = current.next
  }

  // 拿到第n/k个节点
  const targetIndex = Math.floor(length / k)

  current = head
  let index = 1
  while(current !== null && index < targetIndex) {
    current = current.next
    index++
  }
  return current
}


// 进行测试
class ListNode {
  constructor(value,next = null) {
    this.value = value
    this.next = next
  }
}

// 打印函数
let l1 = new ListNode(1,new ListNode(2,new ListNode(3,new ListNode(4,new ListNode(5)))))

console.log(findKthToTail(l1,4))



