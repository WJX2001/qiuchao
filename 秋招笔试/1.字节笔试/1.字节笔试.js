// TODO: 题目一
// var num = 130
// function func() {
//   var num = 117
//   var foo = eval
//   return foo(num)
// }

// console.log(func()) // 117

// TODO: 题目二
// let func = 117

// let work = function func() {
//   console.log(func === 117)
//   func = 935
// }

// work()
// console.log(func) // false 117

// TODO: 题目三
// const p1 = new Promise((resolve, reject) => {
//   resolve(117)
//   throw new Error('None') // 这个错误会被抛出 但是不会影响 p1的状态，因为上方的resolve将p1状态锁死，不能更改
// })

// const p2 = new Promise((resolve, reject) => {
//   reject(p1)
// })

// p1.then(() => {
//   console.log(1) // p1此时为 resolve状态，会将回调立刻执行 打印1
// }).catch(() => console.log(2)) // 这个不会执行 因为 p1是 resolved

// p2.then(() => {
//   console.log(3) // p2 是rejected 不会执行
// }).catch(() => console.log(4)) // 注册一个捕捉拒绝的回调 会执行

// TODO: 题目四
// const map = new Map()
// const proxy = new Proxy(map, {})
// proxy.set('name', 'jack')

// console.log(proxy)

//? 上述代码修改方法
// const proxy = new Proxy(map, {
//   set(target, property, value) {
//     target.set(property, value) // 将 set 操作传递给被代理的 Map 对象
//     return true // 返回 true 表示设置成功
//   },
// })

// proxy.name = 'jack'
// proxy.set('name', 'jack')

// console.log(proxy)
// TODO: 题目五
// class User {
//   #name = 'wjx'
//   getName() {
//     return this.#name
//   }
// }

// let user = new User()
// user = new Proxy(user, {})
// console.log(user.getName())

// TODO: 题目六
// const arr = new Array()
// const proxy = new Proxy(arr, {})
// proxy.push(1)
// console.log(proxy) // [1]

// TODO: 题目七
// const obj1 = {
//   0: true,
//   length: 1, // 由于没有isConcatSpreadable 属性，意味着默认情况下不会被 concat 方法展开
// }

// const obj2 = {
//   0: true,
//   [Symbol.isConcatSpreadable]: true, // 会被展开
//   length: 1,
// }

// console.log([].concat(obj1)) // [object Object]
// alert([].concat(obj2)) // [true] 作为元素的新数组

// TODO: 题目七

//? 已知一个有序表（1，3，5，7，9，11，13，15，17，19，21）当二分查找值为10的元素查找失败的比较次数

// 代码写法 实现二分查找次数
// const binarySearch = (arr, target) => {
//   let low = 0
//   let high = arr.length - 1
//   let comparisons = 0

//   while (low <= high) {
//     const mid = Math.floor((low + high) / 2)
//     comparisons++

//     if (arr[mid] === target) {
//       return comparisons // 找到了目标元素，返回比较次数
//     } else if (arr[mid] < target) {
//       low = mid + 1
//     } else {
//       high = mid - 1
//     }
//   }

//   return comparisons // 没有找到目标元素，返回比较次数
// }

// const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21]
// const target = 10
// const comparisons = binarySearch(arr, target)
// console.log(`查找失败时的比较次数为: ${comparisons}`)
