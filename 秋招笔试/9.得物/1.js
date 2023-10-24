// function getMaxHeightDiff(heights) {
//   const n = heights.length
//   let maxDiff = 0

//   for (let i = 0; i < n; i++) {
//     const diff = Math.abs(heights[i] - heights[(i + 1) % n])
//     maxDiff = Math.max(maxDiff, diff)
//   }

//   return maxDiff
// }

// 示例输入
// function getMaxHeightDiff(heights) {
//   const n = heights.length
//   let maxDiff = Infinity

//   for (let i = 0; i < n; i++) {
//     const diff = Math.abs(heights[i] - heights[(i + 1) % n])
//     maxDiff = Math.min(maxDiff, diff)
//   }

//   return maxDiff
// }

// // 示例输入
// const heights = [2, 1, 1, 3, 2]

// const maxDiff = getMaxHeightDiff(heights)
// console.log(maxDiff)
// function isPrime(n) {
//   if (n <= 1) return false
//   if (n <= 3) return true
//   if (n % 2 === 0 || n % 3 === 0) return false

//   for (let i = 5; i * i <= n; i += 6) {
//     if (n % i === 0 || n % (i + 2) === 0) {
//       return false
//     }
//   }

//   return true
// }

// function gcd(a, b) {
//   if (b === 0) return a
//   return gcd(b, a % b)
// }

// function countPrimitiveRoots(p) {
//   if (!isPrime(p)) {
//     return 0 // 输入必须是素数
//   }

//   let phi = p - 1 // 欧拉函数的值，对于素数 p，欧拉函数的值是 p - 1
//   let factors = [1]

//   for (let i = 2; i < phi; i++) {
//     if (gcd(i, phi) === 1) {
//       factors.push(i)
//     }
//   }

//   return factors.length
// }

// // 使用示例
// const p =  // 例如，要找17的原根数量
// const primitiveRootCount = countPrimitiveRoots(p)
// console.log(`素数 ${p} 的原根数量为: ${primitiveRootCount}`)
function findMaxHeightDifference(n, heights) {
  // 将身高数组复制一份并拼接到原数组后面，形成一个长度为2n的新数组
  const extendedHeights = [...heights, ...heights]
  let maxDifference = Infinity

  // 遍历每个演员作为起点，计算相邻身高差的最大值
  for (let i = 0; i < n; i++) {
    let difference = 0

    // 计算当前演员与相邻演员的身高差
    for (let j = i; j < i + n - 1; j++) {
      const currentDifference = Math.abs(
        extendedHeights[j] - extendedHeights[j + 1]
      )
      difference = Math.max(difference, currentDifference)
    }

    // 更新最大身高差
    maxDifference = Math.min(maxDifference, difference)
  }

  return maxDifference
}

const n = 5
const heights = [2, 1, 1, 3, 2]
const maxDifference = findMaxHeightDifference(n, heights)
console.log(maxDifference) // Output: 1



实现一个函数 可以将数组转化为数状结构

const arr = [
  {id:1,name:"i1"},
  {id:2,name:"i2",parentId:1},
  {id:4,name:"i4",parentId:3},
  {id:3,name:"i3",parentId:2},
  {id:8,name:"i8",parentId:7},
]