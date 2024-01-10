class Queue {
  constructor() {
    this.item = {}
    this.count = 0
    this.lowestCount = 0
  }

  size () {
    return this.count - this.lowestCount
  }
  isEmpty () {
    return this.size() === 0
  }
  dequeue () {
    if (this.isEmpty) {
      return undefined
    }

    const result = this.item[this.lowestCount]
    delete this.item[this.lowestCount]
    this.lowestCount++
    return result
  }
  enqueue (element) {
    this.item[this.count] = element
    this.count++
  }
}

