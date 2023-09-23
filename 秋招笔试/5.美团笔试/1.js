function longestGoodSequence(n, arr) {
  if (n <= 2) {
    return n // 如果数组长度小于等于2，最长的好序列长度为数组长度
  }

  let maxLen = 2 // 初始化最长好序列长度为2
  let dp = new Array(n).fill(2) // 使用动态规划数组dp，初始化为2

  for (let i = 2; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] === arr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 2)
      }
    }
    maxLen = Math.max(maxLen, dp[i])
  }

  return maxLen // 返回最终的最长好序列长度
}

console.log(longestGoodSequence(4, [1, 1, 1, 1])) // 输出 4

// 输入
// 2
// 2 100
// -1 1
// 2  100
// -1 -1

// 输出
// YES
// NO

for (let i = 1; i <= parseInt(str); i++) {
  i % 15 === 0
    ? console.log('FizzBuzz')
    : i % 3 === 0
    ? console.log('Fizz')
    : i % 5 === 0
    ? console.log('Buzz')
    : console.log(i)
}
