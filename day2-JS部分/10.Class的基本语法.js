// TODO: js中生成实例对象的传统方法是通过构造函数

// function Point(x, y) {
//   this.x = x
//   this.y = y
// }

// Point.prototype.toString = function () {
//   return '(' + this.x + ', ' + this.y + ')'
// }

// var p = new Point(1, 2)

// console.log(p)

// TODO: ES6中的 class 写法

// class Point1 {
//   constructor(x, y) {
//     this.x = x
//     this.y = y
//   }

//   toString() {
//     return '(' + this.x + ', ' + this.y + ')'
//   }
// }

// console.log(typeof Point1) // function

// //? 类的数据类型就是函数，类本身就指向构造函数
// Point1 === Point.prototype.constructor // true

// TODO: 使用的时候 直接对类使用 new 命令 和构造函数的用法完全一致

// class Bar {
//   doStuff() {
//     console.log('stuff')
//   }
// }

// const b = new Bar()
// b.doStuff() // stuff

// TODO: 构造函数的prototype属性，在ES6的类上面继续存在，都在类的 prototype属性上

// TODO: 在类的实例上面调用方法，其实就是调用原型上的方法

// class B {}

// const b = new B()
// console.log(b.constructor === B.prototype.constructor) // true

// TODO: 类的属性和方法 除非显式定义在其本身（即定义在this对象上）否则都是定义在原型上（class上）

class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')'
  }
}

var point = new Point(2, 3)

point.toString() // (2,3)

point.hasOwnProperty('x') // true
point.hasOwnProperty('y') // true
point.hasOwnProperty('toString') // false hasOwnProperty只会检查对象自身属性，而不是继承自原型链的属性

//? 如果想检测到 需要去point的原型上找

// point对象是类的一个实例 因此 point对象的原型 .__proto__ 指向 Point.prototype
point.__proto__.hasOwnProperty('toString') //! true

// TODO: 在类内部可以使用get和set关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为

// class Myclass {
//   constructor() {}
//   get prop() {
//     console.log('getter')
//   }
//   set prop(value) {
//     console.log('setter: ' + value)
//   }
// }

// let inst = new Myclass()
// inst.prop = 123
// inst.prop

// TODO: Class 表达式

// let person = new (class {
//   constructor(name) {
//     this.name = name
//   }

//   sayName() {
//     console.log(this.name)
//   }
// })('张三')

// person.sayName()

// TODO: 静态方法： 所有类中定义的方法都会被实例继承，如果在一个方法前，加上 static关键字，表示不会被实例继承，而是直接通过类来调用，这就称为“静态方法”

// class Foo {
//   static classMethod() {
//     //? 静态方法，直接被Foo类调用，而不能在实例上调用
//     return 'hello'
//   }
// }

// Foo.classMethod() //'hello'

// var foo = new Foo()
// foo.classMethod() // TypeError: foo.classMethod is not a function

// TODO: 静态方法包含 this关键字，指的是类，而不是实例 && （静态方法可以和非静态方法重名）
// class Foo {
//   static bar() {
//     this.baz();
//   }
//   static baz() {
//     console.log('hello');
//   }
//   baz() {
//     console.log('world');
//   }
// }

// Foo.bar() // hello  相当于调用 Foo.baz()

// TODO: 静态方法可以从 super对象上调用 && 父类的静态方法可以被子类继承

class Foo {
  static classMethod() {
    return 'hello'
  }
}

class Bar extends Foo {
  static classMethod() {
    return super.classMethod() + ', too'
  }
}
Bar.classMethod() // "hello, too"

// TODO: 静态属性指的是Class 本身的属性，而不是定义在实例对象（this）上的属性
// // 老写法
// class Foo {
//   // ...
// }
// Foo.prop = 1

// // 新写法
// class Foo {
//   static prop = 1
// }

// TODO: 私有属性 只能在类内部使用，在类的外部使用会报错
class IncreasingCounter {
  #count = 0

  get value() {
    console.log('Getting the current value!')
    return this.#count
  }

  increment() {
    this.#count++
  }
}

// const counter = new IncreasingCounter();
// counter.#count // 报错
// counter.#count = 42 // 报错
