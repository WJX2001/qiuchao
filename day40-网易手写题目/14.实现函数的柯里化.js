// TODO: 实现函数的柯里化

// 基本结构 传入一个函数 返回一个函数
function currying (fn, ...args) {
  return function (...rest) {
    const allArgs = [...args, ...rest]
    if (allArgs.length >= fn.length) {
      return fn.apply(this, allArgs)
    } else {
      return currying(fn, ...allArgs)
    }
  }
}

// 测试柯里化函数
const sum = (a, b, c, d) => a + b + c + d

console.log(currying(sum)(1)(2)(3)(4)) // 10
console.log(currying(sum, 1)(2)(3)(4)) // 10
console.log(currying(sum, 1, 2)(3)(4)) // 10
console.log(currying(sum, 1, 2)(3, 4)) // 10