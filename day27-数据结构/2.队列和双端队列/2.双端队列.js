// TODO: 双端队列是一种特殊的队列，且拥有一些相同的方法

/**
 * TODO: 特殊API
 *  addFront()      // 在双端队列的前端添加新元素
 *  addBack()       // 在双端队列的后端添加新元素
 *  removeFront()   // 在双端队列的前端移除新元素
 *  removeBack()    // 在双端队列的后端移除新元素
 *  peekFront()     // 返回双端队列前端的第一个元素
 *  peekBack()      // 返回双端队列后端的第一个元素
 */

// 双端队列

class Dequeue {
  constructor() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  size () {
    return this.count - this.lowestCount
  }

  isEmpty () {
    return this.size() === 0
  }

  clear () {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  toString () {
    if (this.isEmpty()) {
      return ''
    }
    const strObj = this.items[this.lowestCount]
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      strObj = `${strObj},${this.items[i]}`
    }
    return strObj
  }
  addFront (element) { // 在双端队列前添加元素
    if (this.isEmpty()) {
      this.addBack(element)
    } else {
      this.items[--this.lowestCount] = element
    }
  }

  addBack (element) { // 在双端队列后添加元素
    this.items[this.count] = element
    this.count++
  }

  removeFront () { // 移除队列前端
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }

  removeBack () {
    if (this.isEmpty()) {
      return undefined
    }
    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }

  peekFront () {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }
  peekBack () {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }

}

const dequeue = new Dequeue()
dequeue.addBack('John')
dequeue.addBack('Jack')

console.log(dequeue.count)