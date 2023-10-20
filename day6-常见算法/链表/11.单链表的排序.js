var sortList = function (head) {
  let stk = []
  let cur = head
  while (cur) {
    stk.push(cur.val)
    cur = cur.next
  }

  stk.sort((a, b) => a - b)

  cur = head

  for (let c of stk) {
    cur.val = c
    cur = cur.next
  }
  return head
}

// 辅助函数：将数组转化为链表
function arrayToList(arr) {
  if (arr.length === 0) {
    return null
  }
  const head = new ListNode(arr[0])
  let current = head
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i])
    current = current.next
  }
  return head
}
