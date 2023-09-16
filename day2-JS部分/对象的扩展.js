// // 属性赋值器

// const cart = {
//   _wheel: 4,

//   get wheels() {
//     return this._wheel
//   },

//   set wheels(value) {
//     if (value < this._wheel) {
//       throw new Error('数值太小了')
//     }
//     this._wheel = value
//   },
// }

// let obj = { foo: 123 }
// console.log(Object.getOwnPropertyDescriptor(obj, 'foo'))

// // asign 方法
// const target = {}

// let source1 = { a: 1 }
// let source2 = { b: 2 }

// Object.assign(target, source1, source2)

// console.log(target)

// super 关键字

// const proto = {
//   foo: 'hello',
// }

// const obj = {
//   foo: 'world',
//   find() {
//     return super.foo
//   },
// }

// Object.setPrototypeOf(obj, proto)

// console.log(obj.find())

var person = {
  name: 'John',
  age: 30,
}

// 获取对象的原型
var prototype = Object.getPrototypeOf(person)

console.log(prototype)
console.log(prototype.constructor)
