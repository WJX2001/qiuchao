// TODO: 实现节流函数

function throttle(func, delay) {
  let timer = null

  return function(...args) {
    let res 
    if(!timer) {
      timer = setTimeout(() => {
        func.apply(this,args)
        timer = null
      },delay)
    }
    return res
  }
}