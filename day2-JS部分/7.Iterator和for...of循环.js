// const makeIterator = (array) => {
//   var nextIndex = 0
//   return {
//     next: function () {
//       return nextIndex < array.length
//         ? { value: array[nextIndex++], done: false }
//         : { value: undefined, done: true }
//     },
//   }
// }

// let it = makeIterator(['a', 'b'])

// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

// let arr = ['a', 'b', 'c']

// let iter = arr[Symbol.iterator]()
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())

// TODO: 类部署 Iterator 接口的写法
// class RangeIterator {
//   constructor(start, stop) {
//     this.value = start
//     this.stop = stop
//   }

//   [Symbol.iterator]() {
//     return this
//   }

//   next() {
//     var value = this.value
//     if (value < this.stop) {
//       this.value++
//       return { done: false, value: value }
//     }
//     return { done: true, value: undefined }
//   }
// }

// function range(start, stop) {
//   return new RangeIterator(start, stop)
// }

// for (var value of range(0, 3)) {
//   console.log(value)
// }

// TODO: 通过遍历器实现 链表

// function Obj(value) {
//   this.value = value
//   this.next = null
// }

// Obj.prototype[Symbol.iterator] = function () {
//   var iterator = { next: next }
//   var current = this

//   function next() {
//     if (current) {
//       var value = current.next
//       return { done: false, value: value }
//     }
//     return { done: true }
//   }
//   return iterator
// }

// var one = new Obj(1)
// var two = new Obj(2)
// var three = new Obj(3)

// one.next = two
// two.next = three

// for (var i of one) {
//   console.log(i)
// }

// TODO: 为对象添加 Iterator 接口的例子

// let obj_test = {
//   data: ['hello', 'world'],
//   [Symbol.iterator]() {
//     const self = this
//     let index = 0
//     return {
//       next() {
//         if (index < self.data.length) {
//           return {
//             value: self.data[index++],
//             done: false,
//           }
//         }
//         return { value: undefined, done: true }
//       },
//     }
//   },
// }

// for (const item of obj_test) {
//   console.log(item)
// }

// TODO: 类似数组的对象调用数组的 Symbol.iterator 方法

// let iterator = {
//   0: 'a',
//   1: 'b',
//   2: 'c',
//   length: 3,
//   [Symbol.iterator]: Array.prototype[Symbol.iterator],
// }

// for (let item of iterator) {
//   console.log(item)
// }

// // yield* 用法

// let generator = function* () {
//   yield 1
//   yield* [2, 3, 4]
//   yield 5
// }

// var iterator_temp = generator()

// console.log(iterator_temp.next())

// TODO: 字符串的Iterator 接口

// 字符串是一个类似数组的对象，也原生具有 Iterator 接口

// var someString = 'hi'
// console.log(typeof someString[Symbol.iterator]) // function

// var iterator = someString[Symbol.iterator]()

// TODO: 拓展运算符

// var str = new String('hi')

// console.log([...str])

// str[Symbol.iterator] = function () {
//   return {
//     next: function () {
//       if (this._first) {
//         this._first = false
//         return { value: 'bye', done: false }
//       } else {
//         return { done: true }
//       }
//     },
//     _first: true,
//   }
// }

// console.log([...str])

// TODO: Iterator 接口与 Generator 函数

// let myIterable = {
//   [Symbol.iterator]: function* () {
//     yield 1
//     yield 2
//     yield 3
//   },
// }

// console.log([...myIterable])

// let obj = {
//   *[Symbol.iterator]() {
//     yield 'hello'
//     yield 'world'
//   },
// }

// for (let x of obj) {
//   console.log(x)
// }

// TODO: 数组

// const arr = ['red', 'green', 'blue']

// for (let v of arr) {
//   console.log(v)
// }

// const obj = {}

// obj[Symbol.iterator] = arr[Symbol.iterator].bind(arr)

// for (let v of obj) {
//   console.log(v)
// }
// var arr = ['a', 'b', 'c', 'd']

// for (let a in arr) { // 获取索引
//   console.log(a)
// }

// for (let a of arr) { // 获取值
//   console.log(a)
// }
// const arr = ['apple', 'banana', 'cherry']

// for (const [index, value] of arr.entries()) {
//   console.log(`Index: ${index},Value: ${value}`)
// }

// for of 循环调用遍历器接口，数组的遍历器接口只返回具有数字索引的属性 和 for... in 不同

// let arr = [3, 5, 7]
// arr.foo = 'hello'

// console.log(arr)

// for (let i in arr) {
//   console.log(i)
// }

// for (let i of arr) {
//   console.log(i)
// }

// TODO: 对象
// let es6 = {
//   edition: 6,
//   committee: 'TC39',
//   standard: 'ECMA-262',
// }

//? 方法一： 使用 Object.keys()

// for (var key of Object.keys(es6)) {
//   console.log(key + ':' + es6[key])
// }

//? 方法二： 使用 Generator 函数将对象重新包装

const obj = { a: 1, b: 2, c: 3 }

function* entries(obj) {
  for (let key of Object.keys(obj)) {
    yield [key, obj[key]]
  }
}

for (let [key, value] of entries(obj)) {
  console.log(key, '->', value)
}
