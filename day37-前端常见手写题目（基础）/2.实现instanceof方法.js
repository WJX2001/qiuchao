// TODO: 实现 intanceof方法

// instanceof 运算符用于判断构造函数的prototype属性是否出现在对象的原型链中的任何位置

function myInstanceof(left,right) {
  let proptotype = right.prototype 
  let proto = Object.getPrototypeOf(left)
  while(true) {
    if(!proto) {
      return false
    }
    if(proto === proptotype) {
      return true
    }

    proto = Object.getPrototypeOf(proto)
  }
}