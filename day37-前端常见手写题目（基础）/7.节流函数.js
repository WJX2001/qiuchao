// TODO: 节流函数

// n秒内不重新计时

function throttle (fn, delay) {
  let timeout = null
  return function (...args) {
    let context = this
    let res
    if (!timeout) {
      timeout = setTimeout(() => {
        res = fn.call(context, ...args)
        timeout = null
      }, delay)
    }
    return res
  }
}