// function init() {
//   var name = 'wjx'
//   function displayName() {
//     console.log(name)
//   }
//   displayName()
// }

// init()

// TODO: 使用场景：创建私有变量 延长变量的声明周期

// TODO: 外层作用域如何访问内层变量

// 普通形式
// let i = 0
// function fn() {
//   i++
//   console.log(`函数被访问了${i}次`)
// }

// 闭包形式 创建私有变量 外部可以使用 i 变量 但无法修改i变量

// function fn() {
//   let count = 0
//   function fun() {
//     count++
//     console.log(`函数被访问了${count}次`)
//   }
//   return fun
// }

// const result = fn()

// result()
// result()

// TODO: 内存泄露问题：count 变量 存在内存泄露问题

/**
 * 借助垃圾回收机制，标记清除法可以看出：
 *  1、result 是一个全局变量
 *  2、result 使用到了 fn函数
 *  3、fn 函数用到了 fun 函数
 *  4、fun 函数里面用到 count
 *  5、count 被引用 就不会被回收，所以一直存在
 */
