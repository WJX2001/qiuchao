// TODO: 题目一：将ES6 改写为 ES5

// class Example {
//   constructor(name) {
//     this.name = name
//   }
//   init() {
//     const fun = () => {
//       console.log(this.name)
//     }
//     fun()
//   }
// }
// const e = new Example('Hello')
// e.init()

//? 改写代码
/*
 * 1、class 必须通过 new 来调，不能当作普通函数调用，否则报错
 * 2、ES6 中 class中的所有代码 均处在严格模式之下
 * 3、ES6 中的原型方法 是不可被枚举
 * 4、原型上的方法 不允许通过 new 来调用
 */

// function Example(name) {
//   'use strict' // ES6 中 class中的所有代码 均处在严格模式之下
//   if (!new.target) {
//     // class 必须通过 new 来调，不能当作普通函数调用，否则报错
//     throw new TypeError('必须使用 new 来调用')
//   }
//   this.name = name
// }

// Object.defineProperty(Example.prototype, 'init', {
//   enumerable: false, // ES6 中的原型方法 是不可被枚举
//   value: function () {
//     'use strict'
//     if (new.target) {
//       // 原型上的方法 不允许通过 new 来调用
//       throw new TypeError('init is not a constructor')
//     }

//     var fun = function () {
//       console.log(this.name)
//     }
//     fun.call(this)
//   },
// })

// TODO: 题目二： 数组去重
// const nums = [1, 3, 'j', 'j', 3, 5, 7]

// //? filter 方法(浅拷贝)
// const filterNums = (nums) => {
//   return nums.filter((n, i) => {
//     return nums.indexOf(n) === i
//   })
// }

// console.log(filterNums(nums))

// //? set方法
// const setNums = (nums) => {
//   return [...new Set(nums)]
// }

// console.log(setNums(nums))

// //? reduce 方法
const reduceNums = (nums) => {
  return nums.reduce((acc, value, index) => {
    return [].concat(acc, nums.indexOf(value) === index ? value : [])
  })
}
console.log(reduceNums(nums))

// //? 数字或者字符串数组去重

// const uniqueNums = (nums) => {
//   var result = {}
//   for (let i = 0; i < nums.length; i++) {
//     if (!result[nums[i]]) {
//       result[nums[i]] = true
//     }
//   }
//   return Object.keys(result)
// }

// console.log(uniqueNums(nums))

// TODO: 题目三 数组api

// class Foo {
//   constructor(arr) {
//     this.arr = arr
//   }
//   bar(n) {
//     return this.arr.slice(0, n)
//   }
// }

// var f = new Foo([0, 1, 2, 3])
// console.log(f.bar(1))
// console.log(f.bar(2).splice(1, 1)) // slice之后为 [0,1] splice 表示 从索引1开始删除一个元素，并返回删除的这个元素的数组 所以返回[1]
// console.log(f.arr)

console.log(typeof null) // 被当成一个对象 object
console.log(typeof undefined) // undefined

// TODO: 写一个函数 判断函数类型
//* typeof 方法 在判断 null object 数组的时候返回结果都是 object 所以需要处理

function getType(data) {
  let type = typeof data
  if (type !== 'object') {
    return type
  }
  return Object.prototype.toString.call(data)
}

// 测试
function Person() {}

console.log(getType(1)) // number
console.log(getType(true)) // boolean
console.log(getType([1, 2, 3])) // [object Array]
console.log(getType(/abc/)) // [object RegExp]
console.log(getType(new Date())) // [object Date]
console.log(getType(new Person())) // [object Object]
console.log(getType({})) // [object Object]
