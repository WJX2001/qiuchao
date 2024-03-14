// TODO: 创建一个对象 使用现有的对象来提供新创建的对象的__proto__

function myCreate(obj) {
  function Func() {

  }

  Func.prototype = obj
  Func.prototype.constructor = Func

  return new Func()
}