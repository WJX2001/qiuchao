// 用于判断当前节点是否是我们需要的节点
function defaultEquals (a, b) {
  return a === b
}

// TODO: 链表中的节点类
class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

/**
 * push(element)          // 向链表尾部添加一个新元素
 * insert(element,index)  // 在链表指定位置插入一个新元素
 * getElementAt(index)    // 返回链表中特定位置的元素，如果没有则返回 undefined
 * remove(element)        // 从链表中移除一个元素
 * indexOf(element)       // 返回元素在链表中的索引，如果没有则返回-1
 * removeAt(index)        // 从链表指定位置移除一个元素
 * isEmpty()              // 如果链表中不包含任何元素，则返回true，否则返回false
 * size()                 // 返回链表包含的元素个数
 * getHead()              // 返回链表的第一个元素
 * toString()             // 返回表示整个链表的字符串
 */

// TODO: 链表数据结构
class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0
    this.head = null
    this.equalsFn = equalsFn
  }

  // 链表尾部添加元素  1.链表为空 添加的就是第一个元素 2. 链表不为空 向其追加元素
  push (element) {
    let current = null
    const node = new Node(element)

    if (this.head == null) {
      this.head = node
    } else {
      current = this.head
      /* 当head 不为null时，表示链表有数据，我们需要迭代链表一直到最后一个元素 然后直接把要插入的元素赋值给current.next */
      while (current.next !== null) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }

  // 得到链表某一位置元素
  getElementAt (index) {
    if (index >= 0 && index <= this.count) {
      let current = this.head
      // 保证迭代链表直到找到一个合法的位置，因此需要对传入的index参数 进行合法性校验，然后迭代整个链表
      for (let i = 0; i < index && current !== null; i++) {
        current = current.next
      }
      return current
    }
    return undefined
  }

  // 从链表中移除指定位置元素: 1. 移除第一个元素 2. 移除第一个元素之外的其他元素
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

  // 在任意位置插入元素 1.在第一个位置插入元素 2.在第一个位置之外的位置插入元素
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
    for (let index = 0; index < this.count && current !== null; index++) {
      if (this.equalsFn(element, current.element)) {
        return index
      }
      current = current.next
    }
    return -1
  }

  // 从链表中移除元素
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