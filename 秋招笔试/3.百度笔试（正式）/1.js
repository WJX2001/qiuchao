// function xor(begin, end) {
//   let length = end - begin
//   let res = begin
//   for (let i = 1; i <= length; i++) {
//     res ^= begin + i
//   }
//   return res
// }

// console.log(xor(492416981291, 660748566521))

// const obj = {
//   toString() {
//     return ''
//   },
//   valueOf() {
//     return {}
//   },
// }

// console.log(1 + obj)

// obj[Symbol.toPrimitive] = function () {
//   return {}
// }

// console.log(1 + obj)

// const obj = {
//   then: () => {
//     console.log(117)
//   },
// }

// class cls {
//   constructor() {}
//   then() {
//     console.log(935)
//   }
// }

// async function func1() {
//   await obj
// }

// async function func2() {
//   await new cls()
// }

// func1()
// func2()

// var a = 1
// var obj = { a }

// var obj2 = Object.defineProperty({}, 'a', {
//   value: 1,
//   get() {
//     return 1
//   },
// })

// 5
// 8 7 1 3 4

// 输出
// 2

// 以下是使用 JavaScript 编写的示例代码来找到数组的权值最大的最小操作数：

// javascript
// Copy code
// function findMinOperations(arr) {
//   const n = arr.length
//   let minIdx = 0
//   let maxIdx = 0

//   // 找到数组中的最小值和最大值的索引
//   for (let i = 0; i < n; i++) {
//     if (arr[i] < arr[minIdx]) {
//       minIdx = i
//     }
//     if (arr[i] > arr[maxIdx]) {
//       maxIdx = i
//     }
//   }

//   // 计算最小操作数
//   const operations = Math.max(maxIdx, n - 1 - minIdx)

//   return operations
// }

// console.log(findMinOperations([8, 7, 3, 1, 4]))

// 输入
// 5  4
// 4  1  5 2 3

// 输出
// 1  2  4
// 说明
// 从传送点 1出发 经过4次传送  能到达传送点 1,4,2,1,2

// function findReachablePoints(n, k, connections) {
//   const graph = Array(n)
//     .fill(0)
//     .map(() => [])

//   // 构建传送点之间的图
//   for (let i = 0; i < n; i++) {
//     const destination = connections[i] - 1 // 将传送点从1-based转换为0-based
//     graph[i].push(destination)
//   }

//   const reachable = new Array(n).fill(false)

//   function dfs(node, steps) {
//     if (steps === 0) {
//       reachable[node] = true
//       return
//     }

//     for (const neighbor of graph[node]) {
//       dfs(neighbor, steps - 1)
//     }
//   }

//   dfs(0, k)

//   const result = []
//   for (let i = 0; i < n; i++) {
//     if (reachable[i]) {
//       result.push(i + 1) // 将传送点从0-based转换为1-based
//     }
//   }

//   return result
// }

// 示例用法
// const n = 5
// const k = 4
// const connections = [4, 1, 5, 2, 3]
// const reachablePoints = findReachablePoints(n, k, connections)
// console.log(reachablePoints)

// 输入描述
// 输入共T+1行 第一行表示询问次数T 接下来T行 每行代表依次询问，输入四个正整数 x,y,a,b

// 输出描述
// T行 每行一个整数 表示最小操作数

// 输入

// 2
// 2 9 2 3
// 7 2 3 4

// 输出
// 5
// 3

// 说明 在询问 1 中，选择的操作为 -1 +2 +2 +2 +2
