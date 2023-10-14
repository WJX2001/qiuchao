let str1 = 'wjxsbshfasddd'
let str2 = 'dsadjdjdasd'

let set1 = new Set([...str1])
let set2 = new Set([...str2])

// TODO: 并集
let union = new Set([...set1, ...set2])
console.log(union)

// TODO: 交集
let intersect = new Set([...set1].filter((x) => set2.has(x)))
console.log(intersect)

// TODO: 差集
let difference = new Set([...set1].filter((x) => !set2.has(x)))
console.log(difference)

// TODO: 子集
const isSubset = (array1, array2) =>
  array2.every((element) => array1.includes(element))

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])) // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])) // false
