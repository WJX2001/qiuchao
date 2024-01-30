/* 
  输入：head = [1,1,2]
  输出：[1,2]
*/


var deleteDuplicates = function (head) {
  if (!head) {
    return head
  }

  let cur = head
  while (cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  return head
}

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