// TODO: 实现call 函数

/**
 *  执行步骤：
 *    - 判断call的调用者是否为函数，不是函数需要抛出错误，call调用者就是上下文this，也就是需要被调用的函数
 *    - 判断需要被调用的函数的上下文对象是否传入，不存在就设置为window
 *    - 处理传入的参数，截取的第一个参数后的所有参数
 *    - 将需要被调用的函数，绑在传入的上下文上，作为一个属性
 *    - 使用传入的上下文调用这个函数，并返回结果
 *    - 删除绑定的属性
 *    - 返回结果
 */

Function.prototype.myCall = function(context) {
  if(typeof this !== 'function') {
    throw new TypeError('need function')
  }

  // 拿到后续参数
  let args = arguments.slice(1)
  let result = null

  context = context || window

  context.fn = this
  result = context.fn(...args)

  delete context.fn
  return result
}