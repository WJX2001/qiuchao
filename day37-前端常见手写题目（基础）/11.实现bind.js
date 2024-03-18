// TODO: 实现bind

/**
 * 实现bind的步骤 分解为三部分
 *  - 修改this指向
 *  - 动态传递参数
 *  - 兼容 new 关键字
 */

/* 
  方式一：只在bind中传递函数参数: 
      fn.bind(obj,1,2)()
  方式二：在bind中传递函数参数，也在返回函数中传递参数
      fn.bind(obj,1)(2)
*/


Function.prototype.myBind = function(context) {
  // 判断调用对象是否为函数
  if(typeof this !== 'function') {
    throw new TypeError('error;')
  }

  // 获取参数
  const args = [...arguments].slice(1),fn = this

  return function Fn() {
    // 根据调用方式 传入不同绑定值
    return fn.apply(this instanceof Fn ? new fn(...arguments) : context,args.concat(...arguments))
  }
}
