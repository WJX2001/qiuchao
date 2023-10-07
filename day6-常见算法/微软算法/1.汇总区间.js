// TODO: 题目一
// 将 [1,2, 3, 1, 2, 3, 4, 6, 6, 8, 9, 10]
// 转换为 ["1-3","1-4", 6, "8-10"]，连续的数字就用“-”把首和尾连接起来
var summaryRanges = function (nums) {
  const len = nums.length
  const ans = []
  let i = 0
  while (i < len) {
    let j = i
    while (j + 1 < len && nums[j] + 1 === nums[j + 1]) j++
    if (j === i) {
      ans.push(`${nums[i]}`)
    } else {
      ans.push(`${nums[i]}->${nums[j]}`)
    }
    i = j + 1
  }
  return ans
}

console.log(summaryRanges([1, 2, 3, 1, 2, 3, 4, 6, 6, 8, 9, 10]))
