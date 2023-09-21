// function company(name, job) {
//   this.name = 'zs'
//   this.job = 'CEO'
// }

// one = new company('ls', 'GM')

// console.log('姓名：' + one.name)
// console.log('姓名：' + one.job)

// var a = 35,
//   b = 20
// var c = a > b ? a++ : b++
// alert('a=' + a + ';b=' + b + ';c=' + c)

// function calculateMolecularWeight(molecularFormula) {
//   const atomicMass = {
//     C: 12,
//     H: 1,
//     O: 16,
//     N: 14,
//   }

//   let molecularWeight = 0
//   let currentElement = ''
//   let currentCount = 0

//   for (let i = 0; i < molecularFormula.length; i++) {
//     const char = molecularFormula[i]
//     if (/[CHON]/.test(char)) {
//       if (currentElement !== '') {
//         molecularWeight += atomicMass[currentElement] * (currentCount || 1)
//       }
//       currentElement = char
//       currentCount = 0
//     } else if (/[0-9]/.test(char)) {
//       currentCount = currentCount * 10 + parseInt(char)
//     }
//   }

//   if (currentElement !== '') {
//     molecularWeight += atomicMass[currentElement] * (currentCount || 1)
//   }

//   return molecularWeight
// }

// // 示例用法
// const molecularFormula = 'C4H9OH6'
// const molecularWeight = calculateMolecularWeight(molecularFormula)
// console.log(molecularWeight)

// function smallestSubsequence(s) {
//   const count = new Array(26).fill(0)
//   const visited = new Array(26).fill(false)
//   const stack = []

//   // 统计每个字符出现的次数
//   for (const char of s) {
//     count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
//   }

//   for (const char of s) {
//     count[char.charCodeAt(0) - 'a'.charCodeAt(0)]--

//     if (visited[char.charCodeAt(0) - 'a'.charCodeAt(0)]) {
//       continue
//     }

//     // 如果当前字符比栈顶字符小，并且栈顶字符在后面还会出现，则出栈
//     while (
//       stack.length > 0 &&
//       char < stack[stack.length - 1] &&
//       count[stack[stack.length - 1].charCodeAt(0) - 'a'.charCodeAt(0)] > 0
//     ) {
//       visited[stack.pop().charCodeAt(0) - 'a'.charCodeAt(0)] = false
//     }

//     stack.push(char)
//     visited[char.charCodeAt(0) - 'a'.charCodeAt(0)] = true
//   }

//   return stack.join('')
// }

// // 示例用法
// const inputString = 'abcdbabee'
// const result = smallestSubsequence(inputString)
// console.log(result) // 输出 "abcd"

// 实现一个函数，可以将数组转化为树桩数据结构
// 入参格式参考：

// const arr=[
//   {id:1,name:'i1'},
//   {id:2,name:'i2',parentId:1},
//   {id:2,name:'i4',parentId:3},
//   {id:2,name:'i3',parentId:2},
//   {id:2,name:'i8',parentId:7},
// ]

function arrayToTree(arr) {
  const map = new Map()
  const roots = []

  // 创建节点映射
  for (const item of arr) {
    map.set(item.id, { ...item, children: [] })
  }

  // 构建树结构
  for (const item of arr) {
    const parent = map.get(item.parentId)
    if (parent) {
      parent.children.push(map.get(item.id))
    } else {
      roots.push(map.get(item.id))
    }
  }

  return roots
}

// 示例用法
const arr = [
  { id: 1, name: 'i1' },
  { id: 2, name: 'i2', parentId: 1 },
  { id: 3, name: 'i4', parentId: 3 },
  { id: 4, name: 'i3', parentId: 2 },
  { id: 5, name: 'i8', parentId: 7 },
]

const tree = arrayToTree(arr)
console.log(JSON.stringify(tree, null, 2))
