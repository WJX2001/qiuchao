// TODO: 队列的数据结构

/**
 * TODO: 队列API
 *  enqueue()   // 向队列的尾部添加元素
 *  dequeue()   // 向队列的开头移除第一个元素，并返回被移除的元素
 *  peek()      // 返回队列的第一个元素
 *  isEmpty()   // 判断队列是否为空
 *  size()      // 返回队列包含元素的个数
 *  clear()     // 清空队列
 *  toString()  // 将队列转换成字符串
 */


// 首先需要使用类来表示一个队列
class Queue {
  constructor() {
    this.count = 0 // 队列的大小
    this.lowestCount = 0 // 追踪第一个元素
    this.items = {}
  }

  size () {
    return this.count - this.lowestCount
  }
  isEmpty () {
    return this.size() === 0
  }
  enqueue (element) {
    this.items[this.count] = element
    this.count++
  }
  dequeue () { // 删除第一个
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }
  peek () {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
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
    let objStr = this.items[this.lowestCount]
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objStr = `${objStr},${this.items[i]}`
    }
    return objStr
  }
}

// TODO: 测试用例

const queue = new Queue()
console.log(queue.isEmpty()) // true
queue.enqueue('AAA')
queue.enqueue('BBB')
queue.enqueue('CCC')
console.log(queue.isEmpty()) // false
console.log(queue.size())    // 3
console.log(queue.toString()) // AAA,BBB,CCC
console.log(queue.peek()) // AAA

queue.dequeue()
console.log(queue.toString()) // BBB,CCC

queue.clear()
console.log(queue.isEmpty()) // true


function hotPotato (elementList, num) {
  const queue = new Queue()
  const eliminatedList = []
  for (let i = 0; i < elementList.length; i++) {
    queue.enqueue(elementList[i])
  }
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    eliminatedList.push(queue.dequeue())
  }
  return {
    eliminated: eliminatedList,
    winner: queue.dequeue()
  }
}

function hotPotato1 (elementList, num) {
  const queue = []
  const eliminatedList = []
  for (let i = 0; i < elementList.length; i++) {
    queue.push(elementList[i])
  }

  while (queue.length > 1) {
    for (let i = 0; i < num; i++) {
      queue.push(queue.shift())
    }
    eliminatedList.push(queue.shift())
  }
  return {
    eliminated: eliminatedList,
    winner: queue.shift()
  }

}


const names = ['AAA', 'BBB', 'CCC', 'DDD', 'EEE']
const result = hotPotato1(names, 7)
for (let i = 0; i < result.eliminated.length; i++) {
  console.log(`${result.eliminated[i]}在击鼓传花游戏中被淘汰。`)
}
console.log(`胜利者：${result.winner}`)