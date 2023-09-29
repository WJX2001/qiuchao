// s = "12223333752"，请你输出"1,8,12,7,5"，即合并相同的数字并按顺序输出
const mergeSum = (s) => {
  // 首先将各字符串出现的次数存起来
  let charCount = {}
  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    if (charCount[char]) {
      charCount[char]++
    } else {
      charCount[char] = 1
    }
  }

  // 将整字符串先去重，然后将每项进行遍历并乘以相应的次数
  let res = [...new Set(s)].map((i) => i * charCount[i])
  return res
}
console.log(mergeSum(s))
