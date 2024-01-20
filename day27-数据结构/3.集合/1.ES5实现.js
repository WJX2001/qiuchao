// TODO: 集合是一个没有重复元素 也没有顺序概念的数组

/**
 *  add(element)      // 向集合中添加新元素
 *  delete(element)   // 从集合移除一个元素
 *  has(element)      // 判断元素是否在集合中 如果是则返回true 否则返回 false
 *  clear()           // 清空集合
 *  size()            // 返回集合所包含元素的数量
 *  values()          // 返回一个包含集合中所有值的数组
 */

class Set {
  constructor() {
    this.items = {}
  }

  has (element) {
    // return element in this.items
    // 要判断一个对象是否有某个属性，我们可以使用 in 操作符来判断，但并不是所有的对象都继承了 Object.prototype
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }

  add (element) {
    if (!this.has(element)) {
      this.items[element] = element
      return true
    }
    return false
  }

  delete (element) {
    if (this.has(element)) {
      delete this.items[element]
      return true
    }
    return false
  }

  clear () {
    this.items = {}
  }

  size () {
    // 方法一： 使用内置的方法 Object.keys()
    // return Object.keys(this.items).length

    // 方法二： 新增一个变量 当add 或者delete时，维护这个变量
    let count = 0
    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        count++
      }
    }
    return count
  }

  values () {
    // 兼容性不好
    // return Object.values(this.items)

    // 更优解法
    let values = []
    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        values.push(key)
      }
    }
    return values
  }

  // TODO: 集合运算
  // 并集运算
  union (otherSet) {
    const unionSet = new Set()
    this.values().forEach(value => unionSet.add(value))
    otherSet.values().forEach(value => unionSet.add(value))
    return unionSet
  }

  // 交集运算
  intersection (otherSet) {
    const intersectionSet = new Set()
    this.values().forEach(item => {
      if (otherSet.has(item)) {
        intersectionSet.add(item)
      }
    })
    return intersectionSet
  }

  // 差集运算
  difference (otherSet) {
    const differenceSet = new Set()
    this.values().forEach(item => {
      if (!otherSet.has(item)) {
        differenceSet.add(item)
      }
    })
    return differenceSet
  }


}

// TODO: 测试
const set = new Set()
set.add(1)
console.log(set.values()) // [1]
console.log(set.has(1))   // true
console.log(set.size())   // 1
set.add(2)
console.log(set.values()) // [1, 2]
console.log(set.has(2))   // true
console.log(set.size())   // 2
set.delete(1)
console.log(set.values()) // [2]
set.delete(2)
console.log(set.values()) // []


// const setA = new Set()
// setA.add(1)
// setA.add(2)
// setA.add(3)
// const setB = new Set()
// setB.add(4)
// setB.add(5)
// setB.add(6)
// const result = setA.union(setB)
// console.log(result.values()) // [1, 2, 3, 4, 5, 6]

const setA = new Set()
setA.add(1)
setA.add(2)
setA.add(3)
const setB = new Set()
setB.add(2)
setB.add(3)
setB.add(4)
const result = setA.difference(setB)
console.log(result.values()) // [1]












