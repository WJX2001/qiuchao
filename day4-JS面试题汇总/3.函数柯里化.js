function sum(x, y, z) {
  console.log(x + y + z)
  // console.log(this)
}

// TODO: 柯里化函数
function curry(fn) {
  function curryFn(...args) {
    // fn.length 代表的是获取函数行参的长度
    if (args.length >= fn.length) {
      // 这里用 call 改变 this 指向
      fn.call(this, ...args)
    } else {
      return function (...newArgs) {
        return curryFn(...args.concat(newArgs))
      }
    }
  }
  return curryFn
}

var foo = curry(sum)

foo(10)(20)(30)
