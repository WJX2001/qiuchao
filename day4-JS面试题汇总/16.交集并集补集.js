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
