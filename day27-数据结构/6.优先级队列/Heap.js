class Heap {
  constructor(comparator = (a, b) => a - b) {
    this.array = []
    this.comparator = (i1, i2) => comparator(this.array[i1], this.array[i2])
  }

  get size () {
    return this.array.length
  }

  swap (a, b) {
    [this.array[a], this.array[b]] = [this.array[b], this.array[a]]
  }

  // 插入新的节点
  add (value) {
    this.array.push(value)
    this.bubbleUp()
  }

  // 上浮节点
  bubbleUp () {
    // 获取当前数组最后一个元素的索引
    let cur = this.size - 1
    const parent = (i) => Math.ceil(i / 2 - 1)
    // 比较父节点和当前节点（新节点）的优先级
    // 低的排在上面，将节点

    while (parent(cur) >= 0 && this.comparator(parent(cur), cur) > 0) {
      this.swap(parent(cur), cur)
      cur = parent(cur)
    }
  }

  // 删除节点
  remove (index = 0) {
    // 将要移除的节点和最后一个子节点交换
    this.swap(this.size - 1, index)
    // 移除节点并保存值
    const value = this.array.pop()
    // 使子节点按照优先级排序
    this.bubbleUp()
    return value
  }

  // 下沉
  bubbleDown () {
    let cur = index
    const left = (i) => i * 2 + 1
    const right = (i) => i * 2 + 2

    // 比较两个子节点的优先级，选出优先级最低的
    const getTopChild = (i) => {
      right(i) < this.size && this.comparator(left(i), right(i)) > 0 ? right(i) : left(i)
    }
  }



}