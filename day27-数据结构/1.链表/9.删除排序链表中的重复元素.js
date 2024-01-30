/* 
  输入：head = [1,2,3,3,4,4,5]
  输出：[1,2,5]
  这里删除是只要出现重复就删除
*/

var deleteDuplicates = function (head) {
  if (!head) {
    return head
  }
  let dummy = new LinkedList(-1, head)
  let cur = dummy

  while (cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      let x = cur.next.val
      while (cur.next && cur.next.val === x) {
        cur.next = cur.next.next
      }
    } else {
      cur = cur.next
    }
  }
  return dummy.next
}

// 

class LinkedList {
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

function test () {
  let head = new LinkedList(1, new LinkedList(2, new LinkedList(3, new LinkedList(3, new LinkedList(4, new LinkedList(4, new LinkedList(5)))))))
  printFunc(deleteDuplicates(head))
}
test()