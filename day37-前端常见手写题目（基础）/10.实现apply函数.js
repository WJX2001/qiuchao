// TODO: 实现apply函数

// 区别是最后参数的获取方式
Function.prototype.myApply = function(context) {
  if(typeof this !== 'function') {
    throw new TypeError('need function')
  }
  let args = arguments[1]
  let res = null

  context = context || window
  context.fn = this
  res = context.fn(...args)

  delete context.fn
  return res
}