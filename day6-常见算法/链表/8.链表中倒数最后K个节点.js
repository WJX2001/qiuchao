function FindKthToTail(pHead, k) {
  // write code here
  let p1 = pHead
  for (let i = 0; i < k; i++) {
    if (p1 === null) return null
    p1 = p1.next
  }
  let p2 = pHead
  while (p1 !== null) {
    p2 = p2.next
    p1 = p1.next
  }
  return p2
}
