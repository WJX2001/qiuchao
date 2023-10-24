// 例如：给定 nums1 = [1, 2, 2, 1]，nums2 = [2, 2]，返回 [2, 2]。

let nums1 = [1, 2, 2, 1]
let nums2 = [2, 2, 2]

const intersect = (nums1, nums2) => {
  let map = {}
  let res = []
  for (let c of nums1) {
    if (map[c] > 0) {
      map[c]++
    } else {
      map[c] = 1
    }
  }

  for (let n of nums2) {
    if (map[n] > 0) {
      res.push(n)
      map[n]--
    }
  }
  return res
}

console.log(intersect(nums1, nums2))
