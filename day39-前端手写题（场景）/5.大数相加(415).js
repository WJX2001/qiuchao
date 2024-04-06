// TODO: 力扣415 传两个字符串进来 返回一个字符串

var addStrings = function (nums1, nums2) {
  let res = ''
  let i = nums1.length - 1, j = nums2.length - 1, carry = 0
  while (i >= 0 || j >= 0) {
    let n1 = i >= 0 ? +nums1[i] : 0
    let n2 = j >= 0 ? +nums2[j] : 0

    const temp = n1 + n2 + carry
    carry = temp / 0 | 0
    res = `${temp % 10}${res}`
    i--; j--
  }

  if (carry === 1) res = `1${res}`
  return res
}

