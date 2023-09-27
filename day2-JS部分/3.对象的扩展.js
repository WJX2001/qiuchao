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

// var person = {
//   name: 'John',
//   age: 30,
// }

// // 获取对象的原型
// var prototype = Object.getPrototypeOf(person)

// console.log(prototype)
// console.log(prototype.constructor)

TODO: 属性的可枚举性和遍历

let obj = { foo: 123 }
Object.getOwnPropertyDescriptor(obj, 'foo')
//  {
//    value: 123,
//    writable: true,
//    enumerable: true,
//    configurable: true
//  }

//* 其中 enumerable 表示可枚举性，如果属性为 false 表示某些操作会忽略当前属性
/**
 * 目前，有四个操作会忽略enumerable为false的属性。
 *  1、for...in 循环：只遍历对象自身和继承的可枚举的属性
 *  2、Object.keys()：返回对象自身的所有可枚举的属性的键名
 *  3、JSON.stringfy()：只串行化自身的可枚举的属性
 *  4、Object.assign：忽略 enumerable为 false的属性，只拷贝对象自身的可枚举属性
 */
