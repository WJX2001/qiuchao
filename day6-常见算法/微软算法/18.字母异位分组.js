var groupAnagrams = function (strs) {
  // 编码到分组的映射
  let codeToGroup = new Map()
  for (let s of strs) {
    // 对字符串进行编码
    let code = encode(s)

    // 把相同的字符串放在一起
    if (!codeToGroup.has(code)) {
      codeToGroup.set(code, [])
    }
    codeToGroup.get(code).push(s)
  }

  let res = []
  for (let group of codeToGroup.values()) {
    res.push(group)
  }
  return res
}

// 利用每个字符出现的次数进行编码
function encode(s) {
  let count = new Array(26).fill(0)
  for (let c of s) {
    let delta = c.charCodeAt() - 'a'.charCodeAt()
    count[delta]++
  }
  return count.toString()
}
