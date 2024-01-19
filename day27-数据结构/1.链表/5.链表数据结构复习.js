
function defaultEquals (a, b) {
  return a === b
}

class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this, count = 0
    this.head = null
    this.equalsFn = equalsFn
  }


  // 向链表尾部添加一个新的项
  push (element) {
    let current = null
    const node = new Node(element)
    if (this.head === null) {
      this.head = node
    } else {
      current = this.head
      while (current.next !== null) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }

  getElementAt (index) {
    if (index >= 0 && index <= this.count) {
      let current = this.head
      for (let i = 0; i < index && current !== null; i++) {
        current = current.next
      }
      return current
    }
  }

  removeAt (index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        this.head = current.next
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = current.next
      }
      this.count--
      return current.element
    }
    return undefined
  }
  insert (element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element)
      if (index === 0) {
        const current = this.head
        node.next = current
        this.head = node
      } else {
        const previous = this.getElementAt(index - 1)
        const current = previous.next
        node.next = current
        previous.next = node
      }
      this.count++
      return true
    }
    return false
  }

  // 返回一个元素的位置
  indexOf (element) {
    let current = this.head
    for (let i = 0; i < this.count && current !== null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i
      }
      current = current.next
    }
    return -1
  }

}