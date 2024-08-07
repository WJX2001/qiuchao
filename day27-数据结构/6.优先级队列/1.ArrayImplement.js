class NaivePQ {
  constructor(comparator = (a, b) => a - b) {
    this.array = []
    this.comparator = comparator
  }

  // TODO: 入队操作
  // 插入元素
  add(value) {
    this.array.push(value)
    this.array.sort(this.comparator)
  }

  // TODO: 出队操作
  // 从头到尾删除元素，如果堆为空则返回null
  remove() {
    if(!this.array.length) return null
    const value = this.array.shift()
    return value
  }

}
const pq = new NaivePQ((x, y) => y.age - x.age);
pq.add({ name: 'Maria', age: 23 });
pq.add({ name: 'Nushi', age: 42 });
pq.add({ name: 'Jose', age: 32 });

console.log(pq)