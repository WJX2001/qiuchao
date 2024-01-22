
// TODO: 让下面代码成立 不要改动代码

// var [a, b] = {
//   a: 3,
//   b: 4
// }

// console.log(a, b) // {(intermediate value)(intermediate value)} is not iterable

/**
 * 这里的解构 只需要让右边的部分为可迭代对象
 *    概念一：可迭代对象：满足可迭代协议的对象  
 *    概念二：
 */


/* 
  TODO: 概念一示例
  {
    [Symbol.iterator]: function() {
      return 迭代器
    }
  }
  TODO: 概念二示例

*/

// let arr = [1, 2, 3]
// 声明一个迭代器
// const iter = arr[Symbol.iterator]()

// console.log(iter.next()) // { value: 1, done: false }
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())


Object.prototype[Symbol.iterator] = function () {
  // 这里只要返回一个迭代器即可 并且return 迭代器

  let arr = Object.values(this)
  return arr[Symbol.iterator]()
}

var [a, b] = {
  a: 3,
  b: 4
}


console.log(a, b)


