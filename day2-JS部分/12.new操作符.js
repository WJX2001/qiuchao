// TODO: new 操作符的用法

/**
 *  创建一个新的对象 obj
 *  将对象与构造函数通过原型链连接起来
 *  将构造函数中的 this 绑定到 新建的对象 obj上
 *  根据构造函数返回类型判断，如果是原始值则被忽略，如果是返回对象，需要正常处理
 */

// TODO: 手撕

function myNew(func, ...args) {
  // 创建一个新对象
  const obj = {}

  // 将对象原型指向构造函数原型对象
  obj.__proto__ = func.prototype
  // 将构造函数的 this 指向新对象
  let result = func.apply(obj, args)
  // 返回值判断
  return result instanceof Object ? result : obj
}

// 测试案例
function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.say = function () {
  console.log(this.name)
}

let p = myNew(Person, 'wjx', '123')
console.log(p)
p.say()
