// TODO: 防抖是n秒内会重新计时

// 防抖函数debounce指的是某个函数在某段时间内，无论触发了多少次回调，都只执行最后一次
/**
 *  实现原理：
 *     - 利用定时器，函数第一次执行时设定一个定时器，之后调用时发现已经设定就清空之前的定时器，并重新设定一个新的
 *     - 如果存在没有被清空的定时器，当定时器计时结束后触发函数执行
 */

function debounce (fn, wait = 50) {
  // 通过闭包缓存一个定时器
  let timer = null

  // 将debounce处理结果当作函数返回
  // 触发事件回调时执行这个返回函数

  return function (...args) {
    // this 保存给context
    const context = this

    // 如果一定设定过定时器就清空上一次的定时器
    if (timer) {
      clearTimeout(timer)
    }

    // 开始设定一个新的定时器，定时器结束后执行传入的函数 fn
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, wait)
  }
}

// DEMO 执行debounce函数返回新函数
const betterFn = debounce(() => console.log('fn 防抖执行了'), 1000)
// 停止滑动1秒后执行函数 () => console.log()
document.addEventListener('scroll', betterFn)


// TODO: debounce的第三个参数 immediate 

/**
 *  immediate为true debounce会在wait时间间隔的开始调用这个函数。
 *     - 并且在wait时间之内，不会再次调用
 *     - 把true传递给immediate参数，会让debounce在wait时间开始计算之前就触发函数（没有任何延时就触发函数）
 */


function myDebouce(fn,wait=50,immediate) {
  let timer = null

  return function(...args) {

    // 将this 给context
    const context = this

    if(timer) {
      clearTimeout(timer)
    }
    // 当immediate为true表示第一次触发后执行
    if(immediate && !timer) {
      fn.apply(context,args)
    }

    timer = setTimeout(() => {
      fn.apply(context,args) 
    },wait)
  }
}




