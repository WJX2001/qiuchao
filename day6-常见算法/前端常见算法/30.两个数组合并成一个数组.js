// 请把两个数组
let a1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2']
let a2 = ['A', 'B', 'C', 'D']
// 合并结果为 ['A1', 'A2', 'A', 'B1', 'B2', 'B', 'C1', 'C2', 'C', 'D1', 'D2', 'D']

// TODO: 拼凑做法
let a2Tmp = a2.map((item) => item + 3)

let a3 = [...a1, ...a2Tmp].sort().map((item) => {
  if (item.includes('3')) {
    return item.split('')[0]
  }
  return item
})

console.log(a3)
