// 将 [2, 10, 3, 4, 5, 11, 10, 11, 20]
// 变成：[[2, 3, 4, 5], [10, 11], [20]]

let arr = [2, 10, 3, 4, 5, 11, 10, 11, 20]
arr = [...new Set(arr.sort((a, b) => a - b))]
console.log(arr)

var sumaryRanges = function (nums) {
  let len = nums.length
  let i = 0
  let res = []
  while (i < len) {
    let j = i

    while (j + 1 < len && nums[j] + 1 === nums[j + 1]) j++

    if (i === j) {
      res.push(nums[i])
    } else {
      res.push([...nums.slice(i, j + 1)])
    }

    i = j + 1
  }
  return res
}

console.log(sumaryRanges(arr))
