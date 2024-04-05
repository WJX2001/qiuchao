// TODO: 题目一 
const arr1 = [1, 2, 3]

const arr2 = [1, 2, 3]

console.log(arr1 === arr2)// 这里会输出什么 false 引用类型 所以不相等

const arr3 = arr2

arr2[1] = 4

console.log(arr3) // 这里会输出什么 [1,4,3] 因为arr3和arr2指向同一个数组 使用同一块内存

// TODO: 题目二

/**
 * 解决方案：
 *    1、使用闭包来捕获每次循环迭代的i值，将回调放在一个立即执行函数中
 *    2、创建一个块级作用域 使用let
 */

// for (var i = 1; i <= 3; i++) { // 定时器+闭包 当setTimeout被执行的时候 已经循环完毕
//   setTimeout(() => {  // 当 setTimeout 回调函数被执行时，for 循环已经完成了，此时 i 的值已经变成了4。但由于 JavaScript 中的闭包特性，回调函数仍然保留对外部作用域中的变量 i 的引用
//     console.log(i)
//   }, 0)
// }
console.log('-------------------')
// TODO: 题目三
function fn1 () {
  console.log(v1)
  console.log(v2)

}

function fn2 () {
  let v1 = 1
  let v2 = 2

  fn1()
}
var v1 = 0

// fn2()

// TODO: 题目四
console.log('script start')

async function async1 () {
  console.log('wjx')
  await async2()
  console.log('async1 end')
}
async function async2 () {
  console.log('async2 end')
}
async1()

setTimeout(function () {
  console.log('setTimeout')
}, 0)

new Promise(resolve => {
  console.log('Promise')
  resolve()
})
  .then(function () {
    console.log('promise1')
  })
  .then(function () {
    console.log('promise2')
  })

console.log('script end') 
