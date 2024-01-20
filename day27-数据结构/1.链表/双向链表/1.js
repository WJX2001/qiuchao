// 单向链表复习

const defaultEqualFn = (a, b) => {
  return a === b
}

// 节点类
class Node {
  constructor(element, next = null) {
    this.element = element
    this.next = next
  }
}

class LinkedList {
  constructor(equalFn = defaultEqualFn) {
    this.count = 0
    this.head = null
    this.equalFn = equalFn
  }

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

  // 迭代链表直达目标位置
  getElementAt (index) {
    if (index >= 0 && index <= this.count) {
      let current = this.head
      for (let i = 0; i < index && current !== null; i++) {
        current = current.next
      }
      return current
    }
    return undefined
  }

  // 移除元素
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

  // 插入元素
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

  // 找到相关元素的对应索引
  indexOf (element) {
    let current = this.head
    for (let i = 0; i < this.count && current !== null; i++) {
      if (this.equalFn(element, current.element)) {
        return i
      }
      current = current.next
    }
    return -1
  }

  remove (element) {
    let index = this.indexOf(element)
    return this.removeAt(index)
  }

  size () {
    return this.count
  }
  isEmpty () {
    return this.size() === 0
  }
  getHead () {
    return this.head === null ? undefined : this.head.element
  }
  toString () {
    if (this.isEmpty()) {
      return ''
    }
    let str = this.head.element
    let current = this.head

    while (current.next !== null) {
      current = current.next
      str = `${str},${current.element}`
    }
    return str
  }
}


// TODO: 测试区域

const linkedList = new LinkedList()
console.log(linkedList.size())          // 0 
console.log(linkedList.isEmpty())       // true
linkedList.push(1)
console.log(linkedList.getHead())       // 1
linkedList.push(3)
linkedList.push(2)
linkedList.push(5)
console.log(linkedList.size())          // 4
let node = linkedList.getElementAt(2)
console.log(node.element)               // 2
console.log(linkedList.indexOf(5))      // 3
console.log(linkedList.indexOf(8))      // -1
console.log(linkedList.insert(9, 1))    // true
console.log(linkedList.toString())      // 1,9,3,2,5
console.log(linkedList.remove(2))       // 2
console.log(linkedList.toString())      // 1,9,3,5
console.log(linkedList.removeAt(2))     // 3
console.log(linkedList.toString())      // 1,9,5



// 双向链表节点
class DoublyNode extends Node {
  constructor(element, next, prev) {
    super(element, next)
    this.prev = prev
  }
}


// TODO: 双向链表
class DoubluLinkedList extends LinkedList {
  constructor(equalFn = defaultEqualFn) {
    super(equalFn)
    this.tail = null // 表示指向双向链表的最后一个元素
  }
}