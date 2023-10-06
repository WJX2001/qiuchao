// TODO: 类型转换
let a = '' - 1 // -1
let b = true + false // 1
let c = null + 1 // 1
let d = undefined + 1 // NaN
let e = [] + [] //""

// TODO: 隐式类型转换

//* 转为字符串
let s = 4 + 'px' + 5
console.log(s) // 4px5

//* 转为数值
let s1 = 'abc'
console.log(+s1, -s1) // NaN, NaN

let s2 = ' 123 '
console.log(+s2, -s2) // 123 -123

s = new Date()
console.log(+s, -s) // 1588675647421 -1588675647421   (这个操作相当于取毫秒数)
