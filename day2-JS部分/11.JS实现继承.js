// TODO: 组合式继承

// 基类
var Person = function (name, age) {
  this.name = name
  this.age = age
}

Person.prototype.test = 'this is Test'
Person.prototype.testFunc = function () {
  console.log('this is a testFunc')
}

// 子类

var Student = function (name, age, gender, score) {
  Person.apply(this, [name, age]) // 盗用构造函数   （第二次调用）
  this.gender = gender
  this.score = score
}

Student.prototype = new Person() // 改变Student 构造函数的原型对象 （第一次调用）

Student.prototype.testFunc = function () {
  console.log('this is a testStuFunc')
}

// 测试
var zhangsan = new Student('张三', 16, '男', 100)

console.log(zhangsan.name, zhangsan.age, zhangsan.gender, zhangsan.score) // 张三 16 男 100
console.log(zhangsan.test) // this is Test

zhangsan.testFunc() // this is a testStuFunc

//! 弊端： 1. 我们调用了两次Person 效率不高 ，因为调用两次 产生两组 name 和 age 属性 一组在原型上 一组在实例上
//! 我们在执行 Student.prototype = new Person()的时候，我们是想要 Person 原型上面的方法，属性是不需要的，
//! 因为属性之后可以通过 Person.apply(this, [name, age]) 拿到，但是当你 new Person()的时候，会实例化一个 Person 对象出来，这个对象上面，属性和方法都有。

// TODO: 圣杯模式

/**
 * 基本思路不通过父类构造函数来给子类原型赋值，而是取得父类原型的一个副本，然后将返回的新对象赋值给子类原型
 */

//? 设定一个中间层

function inherit(target, origin) {
  // target 是子类 origin 是基类
  function F() {} // 作为中间层

  // 将中间层的原型对象 和 基类的原型对象 指向一个
  F.prototype = origin.prototype

  // 假设 new F() 出来的小 f，那么 f的原型对象 === F.prototype === Person.prototype
  // f的构造函数  f.constructor === Person.prototype.constructor 最终指向 Person 类 也就是基类
  target.prototype = new F()

  // 而现在 target的原型对象是 小f ，但是 f.constructor 是Person 而不是 子类 Student,所以需要手动换一下
  target.prototype.constructor = target
}

// 基类
var Person = function (name, age) {
  this.name = name
  this.age = age
}

Person.prototype.test = 'this is a test'
Person.prototype.testFunc = function () {
  console.log('this is a testFunc')
}

// 子类
var Student = function (name, age, gender, score) {
  Person.apply(this, [name, age])
  this.gender = gender
  this.score = score
}

// 使用圣杯继承
inherit(Student, Person)

// 在子类上面添加方法
Student.prototype.testStuFunc = function () {
  console.log('this is a testStuFunc')
}

var zhangsan = new Student('张三', 18, '男', 100)
console.log(zhangsan.name, zhangsan.age, zhangsan.gender, zhangsan.score) // 张三 16 男 100
zhangsan.testFunc()
zhangsan.testStuFunc()
