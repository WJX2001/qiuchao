// TODO: 无重复的最长子串
var lengthOfLongestSubstring = function (s) {
  let window = new Map()
  let left = 0,
    right = 0
  let res = 0

  while (right < s.length) {
    let c = s[right]
    right++

    // 进行窗口内数据更新
    window.set(c, (window.get(c) || 0) + 1)
    // 判断左侧是否需要收缩
    while (window.get(c) > 1) {
      let d = s[left]
      left++
      window.set(d, window.get(d) - 1)
    }
    res = Math.max(res, right - left)
  }
  return res
}

let s = 'abcabcbb'
console.log(lengthOfLongestSubstring(s)) // 3

// TODO: 允许重复，但是所有字符重复的次数加起来不能超过1
var lengthOfLongestSubstring1 = function (s) {
  let window = new Map()
  let left = 0,
    right = 0
  let res = 0
  let totalRepeat = 0 // 新增变量，用于跟踪重复的字符总数

  while (right < s.length) {
    let c = s[right]
    right++

    // 进行窗口内数据更新
    let count = (window.get(c) || 0) + 1
    window.set(c, count)
    if (count > 1) {
      totalRepeat++
    }

    // 判断左侧是否需要收缩
    while (totalRepeat > 1) {
      let d = s[left]
      left++
      let count = window.get(d) - 1
      window.set(d, count)
      if (count >= 1) {
        totalRepeat--
      }
    }
    res = Math.max(res, right - left)
  }
  return res
}

let s1 = 'abcabcbb'
let s2 = 'bbbbb'
console.log(lengthOfLongestSubstring1(s1)) // 4
console.log(lengthOfLongestSubstring1(s2))
