let s = 'loveleetcode'
// var firstUniqChar = function (s) {
//   let obj = {}
//   for(let c of s) {
//     if(obj[c]) {
//       obj[c] ++
//     }else {
//       obj[c] = 1
//     }
//   }
// }
const myObject = {
  a: 1,
  b: -2,
  c: 0,
  d: 4,
  e: -1,
}

// 使用Object.keys()遍历对象的属性，然后使用filter()筛选出属性值大于0的属性
// const filteredObject = Object.keys(myObject)
//   .filter((key) => myObject[key] > 0)
//   .reduce((obj, key) => {
//     obj[key] = myObject[key]
//     return obj
//   }, {})

// console.log(filteredObject)
// let a = 'asssd'
// for (let i = 0; i < a.length; i++) {
//   console.log(a[i])
// }

// function printNum(n) {
//   if (n > 10) {
//     return
//   }
//   console.log(n)
//   setTimeout(() => {
//     printNum(n + 1)
//   }, 1000)
// }
// printNum(1)
function minNumberDisappeared(nums) {
  // write code here
  let res = []
  let map = new Map()
  nums.sort((a, b) => a - b)
  for (let c of nums) {
    map.set(c, (map.get(c) || 0) + 1)
  }
  for (let i = 0; i < nums[nums.length - 1]; i++) {
    if (map.get(nums[i]) === 0) {
      res.push(nums[i])
    }
  }
  return res[0]
}
let nums = [1, 0, 2]

let str = 'This is a sample'

console.log(str.split(' ').reverse())

let arr2 = [1, 2, 3, 1, 2, 3, 4, 6, 6, 8, 9, 10][
  // 转换为
  ('1-3', '1-4', 6, '8-10')
]

function myArr(arr) {
  let slow = 0,
    fast = 0
}
