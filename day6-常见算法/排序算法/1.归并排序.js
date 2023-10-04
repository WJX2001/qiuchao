var sortArray = function (nums) {
  return sortFun(nums)
}

// 对子数组进行排序
const sortFun = (nums) => {
  if (nums.length < 2) {
    return nums
  }

  const mid = Math.floor(nums.length / 2)
  const left = sortFun(nums.slice(0, mid))
  const right = sortFun(nums.slice(mid))

  // 二叉树后序遍历位置
  return merge(left, right)
}

// 合并子数组
const merge = (left, right) => {
  const result = []
  let i = 0,
    j = 0
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i])
      i++
    } else {
      result.push(right[j])
      j++
    }
  }
  return [...result, ...left.slice(i), ...right.slice(j)]
}
