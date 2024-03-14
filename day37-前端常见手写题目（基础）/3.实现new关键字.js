// TODO: 实现一个new方法

/**
 * 在调用new 之后会发生这几个步骤：
 *  1、创建一个空对象
 *  2、设置原型：将空白对象的原型设置为函数的prototype对象
 *  3、让函数的this指向这个对象，执行构造函数的代码（为空白对象添加属性）
 *  4、判断函数的返回值：
 *      - 如果是引用类型，直接返回，比如构造函数主动返回了一个对象 function T() {return {x:1}}
 *      - 如果不是引用类型，返回空白对象；比如构造函数返回一个数字：function T() {return 1}
 */

function myNew (Func, ...args) {
  let obj = {}
  obj.__proto__ = Func.prototype
  let res = Func.apply(obj, args)
  return res instanceof Object ? res : obj
}

function Person (name, age) {
  this.name = name
  this.age = age
  // return {sex: 'female'} // 如果返回一个对象就正常返回
}


let p = myNew(Person, "huihui", 123)
console.log(p) // Person {name: "huihui", age: 123}
p.say() // huihui