
// 首先写出双链表的节点
var Node = function (k, v) {
  this.key = k
  this.value = v
  this.prev = null
  this.next = null
}

// 实现一个双链表
var DoubleList = function () {
  // 头尾虚节点
  this.head = new Node(0, 0)
  this.tail = new Node(0, 0)

  // 链表元素数
  this.size = 0

  // 初始化双向链表的数据
  this.head.next = this.tail
  this.tail.prev = this.head
}

// 在链表结尾添加节点x，时间O(1)
DoubleList.prototype.addLast = function (x) {
  x.prev = this.tail.prev
  x.next = this.tail
  this.tail.prev.next = x
  this.tail.prev = x
  this.size++
}

// 删除链表中的x节点（x一定存在）
DoubleList.prototype.remove = function (x) {
  x.prev.next = x.next
  x.next.prev = x.prev
  this.size--
}

// 删除链表中的第一个节点，并返回该节点，时间O(1)
DoubleList.prototype.removeFirst = function () {
  if (this.head.next === this.tail) {
    return null
  }
  var first = this.head.next
  this.remove(first)
  return first
}

// 返回链表长度，时间 O(1)
DoubleList.prototype.size = function () {
  return this.size
}


// TODO: 靠近尾部的数据是最近使用的，靠近头部的数据是最久未使用的

// 将链表和哈希表结合起来

const LRUCache = function (capacity) {
  this.map = new Map()
  this.cache = new DoubleList()
  // 最大容量
  this.cap = capacity
}

// 这里尽量让LRU的主方法get和put操作避免直接操作map和cache

// 将某个key提升为最近使用
LRUCache.prototype.makeRecently = function (key) {
  var x = this.map.get(key)
  // 先从链表中删除这个节点
  this.cache.remove(x)
  // 重新插到队尾
  this.cache.addLast(x)
}

// 添加最近使用的元素
LRUCache.prototype.addRecently = function (key, val) {
  var x = new Node(key, val)
  // 链表尾部就是最近使用的元素
  this.cache.addLast(x)
  // map中添加 key的映射
  this.map.set(key, x)
}

// 删除某一个key
LRUCache.prototype.deleteKey = function (key) {
  var x = this.map.get(key)
  // 从链表中删除
  this.cache.remove(x)
  // 从map中删除
  this.map.delete(key)
}

// 删除最久未使用的元素
LRUCache.prototype.removeLeastRecently = function () {
  // 删除链表头部即可
  var deleteNode = this.cache.removeFirst()
  // 从map移除
  var deletedKey = deleteNode.key
  this.map.delete(deletedKey)
}

// TODO:  上述方法简单的操作封装，调用这些函数可以避免直接操作cache链和map哈希表，下面实现LRU的get方法

LRUCache.prototype.get = function (key) {
  if (!this.map.has(key)) {
    return -1
  }
  // 将该数据提升为最近使用
  this.makeRecently(key)
  return this.map.get(key).value
}

LRUCache.prototype.put = function (key, val) {
  /**
   * 实现思路：
   *  1. 若key已存在：修改key对应的val，将key提升为最近使用
   *  2. 若key不存在: 需要新插入key
   *    2.1 若容量已满： 淘汰最久未使用的key,插入key和val为最近使用的数据
   *    2.2 若容量未满： 直接插入key和val为最近使用的数据
   */

  if (this.map.has(key)) {
    // 删除旧数据
    this.deleteKey(key)
    // 新插入数据
    this.addRecently(key, val)
    return
  }

  if (this.cap === this.cache.size()) {
    // 删除最久未使用的元素
    this.removeLeastRecently()
  }

  // 添加为最近使用的元素
  this.addRecently(key, val)
}








// 用于测试
function Test () {
  var doubleList = new DoubleList()

  // 添加一些节点
  var node1 = new Node(1, 100)
  var node2 = new Node(2, 200)
  var node3 = new Node(3, 300)

  console.log("Adding node1, node2, node3 to the list...")
  doubleList.addLast(node1)
  doubleList.addLast(node2)
  doubleList.addLast(node3)

  console.log("Size of list after removing first node:", doubleList.size)

  // 删除特定节点
  console.log("Removing node2...")
  doubleList.remove(node1)

  console.log("Size of list after removing node2:", doubleList.size)

  // 尝试删除第一个节点并打印
  console.log("Removing first node again...")
  removedNode = doubleList.removeFirst()
  console.log("Removed node:", removedNode.key, removedNode.value)
}

// Test()