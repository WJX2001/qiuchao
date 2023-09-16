// const a = 'http://test.com?name=1&job=hahaha&word=t'

// // 先提取参数部分
// const params = {}
// const param = a.split('?')[1]

// console.log(param)

// const temp_str = param.split('&')
// console.log(temp_str)

// temp_str.forEach((e) => {
//   const [key, value] = e.split('=')
//   params[key] = decodeURIComponent(value)
// })

// console.log(params)

// 小驼峰写法
// const a = 'THIS_IS_A_DATA'
// const res = a
//   .toLowerCase()
//   .replace(/_./g, (match) => match.charAt(1).toUpperCase())
// console.log(res) // 输出 'thisIsAData'

// 为对象添加属性
// class Point {
//   constructor(x, y) {
//     Object.assign(this, { x, y })
//   }
// }

// // 为属性指定默认值
// const DEFAULTS = {
//   url: {
//     host: 'example.com',
//     port: 7070,
//   },
// }

// const processContent = (options) => {
//   options = Object.assign({}, DEFAULTS, options)
//   console.log(options)
// }

// processContent({ url: { port: 8000 } })
// const obj = {
//   foo: 123,
//   get bar() {
//     return 'abc'
//   },
// }

// console.log('assign' in Object)
// console.log(Reflect.has(Object, 'assign'))
// const source = {
//   set foo(value) {
//     console.log(value)
//   },
// }

// const target1 = {}
// Object.assign(target1, source)

// Object.getOwnPropertyDescriptor(ta)

// const obj = {
//   foo: 123,
//   get bar() {
//     return 'abc'
//   },
// }

// console.log(Object.getOwnPropertyDescriptor(obj, 'foo'))

// // 实现 Object.getOwnPropertyDescriptors()
// const getOwnPropertyDescriptors = () => {
//   const result = {}
//   for (let key of Reflect.ownKeys(obj)) {
//     result[key] = Object.getOwnPropertyDescriptor(obj, key)
//   }
//   return result
// }

// // Object.getPrototypeOf() 用法
// const prototype1 = {}
// const object1 = Object.create(prototype1)

// console.log(Object.getPrototypeOf(object1) === prototype1) // true

// // 实现拷贝
// const shallowMerge = (target, source) =>
//   Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))

// // 浅拷贝
// const shallowClone = (obj) =>
//   Object.create(
//     Object.getPrototypeOf(obj),
//     Object.getOwnPropertyDescriptors(obj)
//   )

// // 继承写法
// const obj1 = Object.assign(Object.create(prot), { foo: 123 })

// // getOwnPropertyDescriptors写法继承

// const obj2 = Object.create(
//   prot,
//   Object.getOwnPropertyDescriptors({
//     foo: 123,
//   })
// )

// // __proto__ 属性

// // Object.setPrototypeOf()

// /** 作用于 __proto__ 相同，用来设置一个对象的原型对象 */

// let proto = {}
// let obj4 = { x: 10 }
// Object.setPrototypeOf(obj4, proto)

// proto.y = 20
// proto.z = 40

// // getPrototypeOf()

// const Rectangle = () => {}

// const rec = new Rectangle()
// console.log(Object.getPrototypeOf(rec) === Rectangle.prototype)

// let obj = { a: 1, b: 2, c: 3 }
// let arr = []
// for (let [key, value] of Object.entries(obj)) {
//   arr.push({ key: value })
// }

// console.log(arr)

// const obj1 = Object.create({}, { p: { value: 42 } })
// console.log(obj1)

// let obj = { one: 1, two: 2 }
// for (let [k, v] of Object.entries(obj)) {
//   console.log([k, v])
//   console.log(`${JSON.stringify(k)}:${JSON.stringify(v)}`)
// }

const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42],
])

console.log(Object.fromEntries(entries))

// __proto__ 属性

// ES5 写法
const obj = {
  method: function () {},
}

obj.__proto__ = someOtherObj

// ES6写法
var obj = Object.create(someOtherObj)
obj.method = function () {}

const foo = {
  b: '456',
}

foo.__proto__ = { a: '123' }
