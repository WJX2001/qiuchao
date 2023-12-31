// function longestGoodSequence(n, arr) {
//   if (n <= 2) {
//     return n // 如果数组长度小于等于2，最长的好序列长度为数组长度
//   }

//   let maxLen = 2 // 初始化最长好序列长度为2
//   let dp = new Array(n).fill(2) // 使用动态规划数组dp，初始化为2

//   for (let i = 2; i < n; i++) {
//     for (let j = 0; j < i; j++) {
//       if (arr[i] === arr[j]) {
//         dp[i] = Math.max(dp[i], dp[j] + 2)
//       }
//     }
//     maxLen = Math.max(maxLen, dp[i])
//   }

//   return maxLen // 返回最终的最长好序列长度
// }

// console.log(longestGoodSequence(4, [1, 1, 1, 1])) // 输出 4

// // 输入
// // 2
// // 2 100
// // -1 1
// // 2  100
// // -1 -1

// // 输出
// // YES
// // NO

// TODO: 算法题一：
// 小美有一个长度为n的数组和一个数m，每次操作可以选择数组中的一个数ai，将m加上 ai,即 m = m+ai 请问小美能否进行10的18次方操作，
// 并且过程中m始终不为0，输入描述一行一个整数t，一行两个整数 n 和 m 表示数组的长度和初始值 一行n个整数 a1,a2...an 表示 数组中的元素输入
// 2
// 2 100
// -1 1
// 2  100
// -1 -1

// 输出
// YES
// NO

// TODO: 算法题二
// 小美有一长度为n的数组a，如果一个序列b满足对于任意的i>=2 都有bi = bi-2 ，则这是一个好序列，
// 小美想知道数组a的子序列中，最长的好序列的长度时多少，
// ?输入描述：第一行一个整数n，表示数组a的长度，第二行n个整数，表示数组a的元素，
// ?输出描述：输出一个整数，表示最长的好序列的长度 用JS实现 子序列是指一个序列中去掉一些元素而不改变剩余元素的相对位置所得到的序列，

//* 输入 4 1212
//* 输出 4

//* 输入 4 1111
//* 输出 4
