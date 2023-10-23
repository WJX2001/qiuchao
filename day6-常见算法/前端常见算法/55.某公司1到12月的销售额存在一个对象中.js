/**
 * 如下：{1:222, 2:123, 5:888}，请把数据处理为如下结构：
 * [222, 123, null, null, 888, null, null, null, null, null, null, null]。
 */

let a = { 1: 222, 2: 123, 5: 888 }

// TODO: 写法一：暴力解法
function objToArray(obj) {
  let res = []
  for (let i = 1; i <= 12; i++) {
    if (
      Object.keys(a)
        .map((item) => Number(item))
        .includes(i)
    ) {
      res[i - 1] = a[i]
    } else {
      res[i - 1] = null
    }
  }
  return res
}

console.log(objToArray(a))

// TODO: 使用 Array.from

let result = Array.from({ length: 12 }).map((_, index) => a[index + 1] || null)
console.log(result)
