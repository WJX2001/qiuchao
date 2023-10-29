// 输入: [1, 2, 3, 4, 5, 6, 7] 和 k = 3
// 输出: [5, 6, 7, 1, 2, 3, 4]
// 解释:
// 向右旋转 1 步: [7, 1, 2, 3, 4, 5, 6]
// 向右旋转 2 步: [6, 7, 1, 2, 3, 4, 5]
// 向右旋转 3 步: [5, 6, 7, 1, 2, 3, 4]
const arr = [1, 2, 3, 4, 5, 6, 7]
const k = 3

var rotate = function (arr, k) {
  for (let i = 0; i < k; i++) {
    let val = arr.pop()
    arr.unshift(val)
  }
  return arr
}

console.log(rotate(arr, k))
