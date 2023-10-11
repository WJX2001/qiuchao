// 987  1000
//       987
//      1987

function ListNode(x) {
  this.val = x
  this.next = null
}

function addMy(list1, list2) {
  // 反转第一个链表

  if (list1 === null) {
    return list1
  }

  if (list2 === null) {
    return list2
  }

  let p1 = reverse(list1)
  let p2 = reverse(list2)

  let dummy = new ListNode(-1),
    p = dummy
  let curry = 0
  while (p1 || p2) {
    let sum = curry
    if (p1) {
      sum += p1.val
      p1 = p1.next
    }

    if (p2) {
      sum += p2.val
      p2 = p2.next
    }

    curry = Math.floor(sum / 10)

    let val = sum % 10
    p.next = new ListNode(val)
    // 让根节点前进
    p = p.next
  }
  if (curry > 0) {
    p.next = new ListNode(curry)
  }
  return dummy.next
}

function reverse(head) {
  if (head === null) {
    return head
  }
  let cur = head
  let pre = null
  let next = null

  while (cur) {
    next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }

  head = pre
  return head
}

let test2 = new ListNode(9)
test2.next = new ListNode(8)
test2.next.next = new ListNode(7)

let test1 = new ListNode(1)
test1.next = new ListNode(0)
test1.next.next = new ListNode(0)
test1.next.next.next = new ListNode(0)

console.log(addMy(test1, test2))
