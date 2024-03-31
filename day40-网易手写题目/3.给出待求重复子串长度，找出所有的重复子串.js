// 给定字符串Str, 待求重复的子串的长度Num, 找出所有的重复子串 

function findRepeatedSubstring (str, num) {
  let map = new Map()
  let res = []
  for (let i = 0; i < str.length; i++) {
    let strTmp = str.substring(i, i + num)
    map.set(strTmp, map.get(strTmp) + 1 || 1)
    if (map.get(strTmp) > 1) {
      res.push(strTmp)
    }
  }
  return res
}


const str = 'abcddeabcddc'
console.log(findRepeatedSubstring(str, 3)) // 输出 ["abc", "bcd", "cdd"]
