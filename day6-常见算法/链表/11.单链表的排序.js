function sortInList(head) {
  // write code here
  let arr = []
  let cur = head
  while (cur) {
    arr.push(cur.val)
    cur = cur.next
  }

  arr.sort((a, b) => a - b)
  cur = head
  for (let i = 0; i < arr.length; i++) {
    cur.val = arr[i]
    cur = cur.next
  }
  return head
}
