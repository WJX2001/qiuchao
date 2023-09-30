// TODO: 题目一
// 将 [1,2, 3, 1, 2, 3, 4, 6, 6, 8, 9, 10]
// 转换为 ["1-3","1-4", 6, "8-10"]，连续的数字就用“-”把首和尾连接起来
function convertToRanges(arr) {
  const result = []
  let left = 0
  for (let right = 1; right <= arr.length; right++) {
    if (right === arr.length || arr[right] - arr[right - 1] !== 1) {
      // 当右指针指向的元素不与前一个元素连续的时候，将连续序列转换为字符串并添加到结果数组中
      if (right - left > 1) {
        result.push(`${arr[left]}-${arr[right - 1]}`)
      } else {
        result.push(arr[left])
      }
      left = right // 更新左指针为右指针的位置
    }
  }
  return [...new Set(result)]
}
