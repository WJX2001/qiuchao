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

class Point {}
