var lengthOfLongestSubstring = function (s) {
  var window = {}
  var left = 0,
    right = 0
  var res = 0
  while (right < s.length) {
    var c = s[right]
    right++
    if (window[c] !== undefined) {
      // window中已经有了c
      window[c]++
    } else {
      window[c] = 1
    }
    while (window[c] > 1) {
      var d = s[left]
      left++
      window[d]--
    }

    res = Math.max(res, right - left)
  }
  return res
}

console.log(lengthOfLongestSubstring('abcabcbbb'))
