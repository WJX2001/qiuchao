// Object.create 静态方法 以一个现有对象作为原型 创建一个新对象

// TODO: 基础案例
const person = {
  name: 'wjx',
  isHuman: false,
  eat: function () {
    console.log('sb')
  }
}
const me = Object.create(person)
me.age = 18
me.isHuman = true

console.log(me)


// TODO: 实现思路

/* 
  1、使用现有的对象来作为新创建对象的原型
  2、创建一个构造函数，将这个构造函数的原型 设置为传入的参数
  3、将这个构造函数的原型的constructor设置为自己 否则会指向传入的参数的父级
  4、利用这个构造函数，创建一个实例对象返回，从而达到创建一个新对象
*/

// TODO: 实战
function MyObjectCreate (obj) {
  function Func () {

  }
  Func.prototype = obj
  Func.prototype.constructor = Func
  return new Func()
}

const parent = {
  name: 'wgj',
  age: 56
}

const wjx = MyObjectCreate(parent)

console.log(wjx.name)  // wgj
console.log(wjx.age)  // 56