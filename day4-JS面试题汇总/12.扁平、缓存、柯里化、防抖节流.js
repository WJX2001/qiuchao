// TODO: flat函数 - 数组扁平化
const arr = [1, 2, [3, 4], [5, 6, [7, 8]]]

// 使用reduce和递归实现
const flat = (arr, initVal) => {
  const startVal = initVal || []

  return arr.reduce((preRes, item) => {
    if (Array.isArray(item)) {
      return flat(item, preRes)
    } else {
      return preRes.concat(item)
    }
  }, startVal)
}

const flatArr = flat(arr)
console.log(flatArr) // [1, 2, 3, 4,5, 6, 7, 8]

// TODO: 如果想对递归的层数进行限制，可以加一个参数来进行控制
const flatDepth = (arr, depth, initVal) => {
  const startVal = initVal || []
  return arr.reduce((preRes, item) => {
    if (Array.isArray(item) && depth > 1) {
      return flat(item, depth - 1, preRes)
    } else {
      return preRes.concat(item)
    }
  }, startVal)
}

const flatArr1 = flatDepth(arr, 1)
console.log(flatArr) // [1, 2, 3, 4,5, 6, 7, 8]

// TODO: 使用 yield* 命令可以取出嵌套数组的所有成员
function* iterArray(arr) {
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      yield* iterArray(arr[i])
    }
  } else {
    yield arr
  }
}

const res4 = [...iterArray(arr)]
console.log(res4) // [1, 2, 3, 4,5, 6, 7, 8]

// TODO: Memo 函数
//* 有时候一个复杂的计算函数需要反复运行，如果每次都对他进行计算，会浪费性能，使用记忆函数来缓存计算过的值

// 斐波那契
const fibonacci = (x) => {
  if (x === 1 || x === 2) {
    return 1
  }
  return fibonacci(x - 1) + fibonacci(x - 2)
}

// 每次计算过程都一样

//! 第一个参数是需要缓存的函数  第二个参数是用来生成缓存key的方法，如果不传就用第一个参数做key
const memo = function (fn, hasher) {
  const memoFun = function () {
    const cache = memoFun.cache
    const args = [].slice.apply(arguments)
    const hashKey = hasher ? hasher.apply(this.arguments) : args[0]
    if (!cache[hashKey]) {
      cache[hashKey] = fn.apply(this.arguments)
    }
    return cache[hashKey]
  }

  // 实例属性
  memoFun.cache = {}
  return memoFun
}

// TODO: 柯里化函数
//* 柯里化就是将一个接收多个参数的函数转为一系列使用一个参数的函数的技术
const fun = (a, b, c) => {
  return [a, b, c]
}

// 柯里化把所有的参数收集起来，当搜集的参数足够时执行主方法

const curry = (fn) => {
  // 先记录主方法的参数个数，fn.length 就是函数接收的参数个数
  const paramsLength = fn.length

  return (executeFun = (...args) => {
    // 如果参数收集够了，执行主方法
    if (args.length >= paramsLength) {
      return fn(...args)
    } else {
      // 参数不够 继续接收参数
      return (...args2) => {
        return executeFun(...args.concat(args2))
      }
    }
  })
}

const curriedFun = curry(fun)
console.log(curriedFun(1)(2)(3))
console.log(curriedFun(1, 2)(3))
console.log(curriedFun(1, 2, 3))

// TODO: 防抖函数
//* 用户连续输入的时候不发请求去搜索，只有当用户输入暂停超过500ms才发请求，
// 使用 setTimeout 如果 timer存在，又触发了这个方法，就把 timer清了继续等，直到不再触发，timer执行

// 发起请求的函数
const sendRequest = () => {}

// 防抖函数
const debounse = (fn, waitTime) => {
  let timer = null

  return function () {
    const self = this
    const args = [].slice.apply(arguments)
    if (timer) {
      clearTimeout(timer)
    } else {
      timer = setTimeout(() => {
        fn.apply(self, args)
      }, waitTime)
    }
  }
}

const debounsedSendRequest = debounse(sendRequest, 500)

// TODO: 节流函数
//* onScroll 方法可能会触发的很频繁，我们不能每次触发的时候都去调回调，我们需要每50s调用一次

const scrollHandler = () => {}

const throttle = (fn, waitTime) => {
  let isRunning = false
  return (...args) => {
    if (!isRunning) {
      isRunning = true
      setTimeout(() => {
        fn(...args)
        isRunning = false
      }, waitTime)
    }
  }
}
