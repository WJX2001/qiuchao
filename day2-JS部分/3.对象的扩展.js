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

// TODO: 属性的可枚举性和遍历

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

//* 其中 对象原型的 toString 和 数组的 length属性，通过将可枚举性设置为false,避免被 for...in遍历到

// false
Object.getOwnPropertyDescriptor(Object.prototype, 'toString').enumerable

//false
Object.getOwnPropertyDescriptor([], 'length').enumerable

//* 所有的Class 的原型的方法都是不可枚举的
Object.getOwnPropertyDescriptor(
  class {
    foo() {}
  }.prototype,
  'foo'
).enumerable // false

// TODO: 属性的遍历
/**
 * ES6 共有5种方法可以遍历对象的属性
 * 1、for...in  循环遍历对象自身和继承的可枚举属性（不含Symbol）
 * 2、Object.keys(obj) 返回一个数组，包括对象自身的（不含继承的）所有可枚举（不含Symbol）
 * 3、Object.getOwnPropertyNames(obj) 返回一个数组，包含对象自身的所有属性（不含Symbol属性，但是包括不可枚举属性）
 * 4、Object.getOwnPropertySymbols(obj) 返回一个数组，包含对象自身的所有Symbol属性的键名
 * 5、Reflect.ownKeys(obj) 返回一个数组，包含对象自身的（不含继承的）所有键名，（不管键名是Symbol或字符串）也不管是否枚举
 */

// TODO: super 关键字

//* this 关键字指向函数所在的当前对象，super 指向当前对象的原型对象

const proto = {
  foo: 'hello',
}

const obj1 = {
  foo: 'world',
  find() {
    return super.foo
  },
}

Object.setPrototypeOf(obj1, proto)
obj1.find() // hello

// TODO: 扩展运算符
let foo = { ...['a', 'b', 'c'] }
console.log(foo)

//* 扩展运算符 只会返回参数对象自身的、可枚举的属性
class C {
  p = 12
  m() {}
}

let c = new C()
let clone = { ...c }

console.log(clone.p)
// console.log(clone.m()) // 报错

// TODO: ... 等同于 Object.assign() 方法
// let aclone = { ...a }
// let aClone = Object.assign({}, a)

// 写法一
// const clone1 = {
//   __proto__: Object.getPrototypeOf(),
//   ...obj,
// }

// const clone2 = Object.assign(Object.create(Object.getPrototypeOf(obj)), obj)

console.log(+0 === -0)
