// TODO: Iterator遍历器：他是一种接口，为各种不同的数据结构提供统一的访问机制
//* 任何数据结构只要部署了Iterator接口，就可以完成遍历操作

/**
 * Iterator作用主要有三个
 * 1、为各种数据结构，提供一个统一的、简便的访问接口
 * 2、使得数据结构的成员能够按某种次序排列
 * 3、ES6创造了一种新的遍历命令 for...of 循环，Iterator接口主要供for...of 消费
 */

// TODO: Iterator遍历过程

/**
 * 1、创建一个指针对象，指向当前数据结构的起始位置，遍历器实际上就是一个指针对象
 * 2、第一次调用指针 next 方法，可以将指针指向数据结构的第一个成员，第二次指向第二个
 * 3、不断调用指针对象的 next 方法，直到指向数据结构的结束为止
 * 4、每调用一次 next 对象，返回一个包含 value 和 done两个属性的对象，done是一个boolean，表示当前遍历是否结束
 */

// TODO: 默认Iterator 接口

/**
 * Iterator接口的目的，为所有的数据结构，提供一种统一的访问机制，for...of循环
 * 当使用 for...of 循环遍历某种数据结构的时候，该循环会自动去寻找Iterator接口
 * 默认的Iterator接口部署在数据结构的 Symbol.iterator属性，一旦具有该属性，就可遍历
 * 凡是部署了Symbol.iterator属性的数据结构，称为部署了遍历器接口，调用这个接口会返回一个遍历器对象
 */

// TODO: 对于原生具有遍历器接口，不用自己写遍历器生成函数，for...of 会自动遍历他们
//* 其他数据结构，需要自己在 Symbol.iterator属性上面部署，这样才会被for...of 遍历

// TODO: 案例一：遍历器实现链表结构
function myObj(value) {
  this.value = value
  this.next = null
}

myObj.prototype[Symbol.iterator] = function () {
  var iterator = { next: next }
  var current = this

  function next() {
    if (current) {
      var value = current.value
      current = current.next
      return { value: value, done: false }
    }
    return { done: true }
  }
  return iterator
}

var one = new myObj(1)
var two = new myObj(2)
var three = new myObj(3)

one.next = two
two.next = three

for (let i of one) {
  console.log(i) // 1 2 3
}

// TODO: 案例二：为一个对象添加 Iterator接口的例子
let obj = {
  data: ['hello', 'world', 'wjx'],
  [Symbol.iterator]() {
    const self = this
    let index = 0
    return {
      next() {
        if (index < self.data.length) {
          return { value: self.data[index++], done: false }
        }
        return { value: undefined, done: true }
      },
    }
  },
}

// 测试obj
for (let i of obj) {
  console.log(i) //hello world wjx
}

// TODO: 对于类似数组的对象（存在数值键名 和 length长度）arguments 部署Iterator接口
//* 简便方法：将Symbol.iterator 方法直接引用数组的Iterator接口

// 案例
let iterator1 = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
  [Symbol.iterator]: Array.prototype[Symbol.iterator],
}

// 测试一下
for (let i of iterator1) {
  console.log(i) // 'a', 'b', 'c'
}

// TODO: 调用 Iterator接口的场合
/**
 * 1、解构赋值
 * 2、扩展运算符
 * 3、yield*  后面跟的是一个可遍历的结构，会调用该结构的遍历器接口
 */

// TODO: 字符串的Iterator 接口
//* 字符串是一个类似数组的对象，也原生具有Iterator接口

let someString = 'hi'
typeof someString[Symbol.iterator] // function

// 调用遍历器接口
let iterator = someString[Symbol.iterator]()
iterator.next() // { value: "h", done: false }
iterator.next() // { value: "i", done: false }
iterator.next() // { value: undefined, done: true }

// TODO: Iterator接口与Generator函数
//* Symbol.iterator()方法的最简单实现

let myIterator1 = {
  [Symbol.iterator]: function* () {
    yield 1
    yield 2
    yield 3
  },
}
console.log([...myIterator1])

// TODO: for...of 循环
//* for...of 循环内部调用的是数据结构的Symbol.iterator方法
/**
 * for...of循环可以使用的范围包括数组、Set 和 Map 结构、某些类似数组的对象
 * 比如arguments对象、DOM NodeList 对象，后文的 Generator 对象，以及字符串。
 */

// TODO: for...in 循环
//* 可以遍历数组的键名，对象键名（主要是遍历对象设计的，不适用于遍历数组）
