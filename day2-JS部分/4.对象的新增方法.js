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

// TODO: Object.is()
//* 用于比较两个值是否严格相等，与严格比较运算符 === 的行为基本一致

/**
 *  == ：会自动转换数据类型
 *  === : NaN === NaN false
 *  +0 === -0 true
 */

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true

// TODO: ES5 可以通过下面的代码，部署Object.is
Object.defineProperty(Object, 'is', {
  value: function (x, y) {
    if (x === y) {
      // 针对 +0 不等于 -0的情况
      return x !== 0 || 1 / x === 1 / y
    }
    // 针对 NaN的情况
    return x !== x && y !== y
  },
  configurable: true,
  enumerable: false,
  writable: true,
})

// TODO: Object.getOwnPropertyDescriptors()
/**
 *  对比：Object.getOwnPropertyDescriptor() 返回某个对象属性的描述对象
 *       Object.getOwnPropertyDescriptors() 返回制定对象所有自身属性的描述对象
 */

const obj = {
  foo: 123,
  get bar() {
    return 'abc'
  },
}

Object.getOwnPropertyDescriptors(obj)
/*
{
  foo: { value: 123, writable: true, enumerable: true, configurable: true },
  bar: {
    get: [Function: get bar],
    set: undefined,
    enumerable: true,
    configurable: true
  }
}
*/

// TODO: 手撕 Object.getOwnPropertyDescriptors()
function myGetOwnPropertyDescriptors() {
  const result = {}
  for (let key of Reflect.ownKeys(obj)) {
    result[key] = Object.getOwnPropertyDescriptor(obj, key)
  }
  return result
}

//! 该方法作用：为了解决 Object.assign() 无法正确拷贝get set 属性的问题
const source = {
  set foo(value) {
    console.log(value)
  },
}

const target1 = {}

Object.assign(target1, source)

Object.getOwnPropertyDescriptor(target1, 'foo')
/* 
{
  value: undefined,
  writable: true,
  enumerable: true,
  configurable: true
}
*/

/**
 *  source 的 foo属性的值是一个赋值函数，通过assign赋值给 target1对象，结果改属性的值变为undefined
 *  Object.assign 方法总是拷贝一个属性的值，而不会拷贝它背后的赋值方法或取值函数
 */

// TODO: 解决方法
const source1 = {
  set foo(value) {
    console.log(value)
  },
}

const target2 = {}
// 使用Object.getOwnPropertyDescriptors() 和 Object.defineProperties()
Object.defineProperties(target2, Object.getOwnPropertyDescriptors(source))
console.log(Object.getOwnPropertyDescriptor(target2, 'foo'))

/* 
  {
    get: undefined,
    set: [Function: set foo],
    enumerable: true,
    configurable: true
  }  

*/

// TODO: 其他用途 配合 Object.create() 方法 ，将对象属性克隆到一个新对象，属于浅拷贝

// 克隆了对象obj
const shallowClone = (obj) =>
  Object.create(
    Object.getPrototypeOf(obj),
    Object.getOwnPropertyDescriptors(obj)
  )

// TODO: Object.getOwnPropertyDescriptors()也可以用来实现 Mixin（混入）模式

let mix = (object) => {
  return {
    with: (...mixin) =>
      mixin.reduce(
        (c, mixin) => Object.create(c, Object.getOwnPropertyDescriptors(mixin)),
        object
      ),
  }
}

let a = { a: 'a' }
let b = { b: 'b' }
let c = { c: 'c' }

let d = mix(c).with(a, b)

console.log(d.c) // c
console.log(d.b) // b
console.log(d.a) // a

// TODO: __proto__ 属性
//* 用来读取或设置当前对象的原型对象 prototype

// es5写法
const obj3 = {
  method: () => console.log(123),
}
const someOtherObj = {
  name: 'wjx',
}
obj3.__proto__ = someOtherObj

// es6写法
var obj4 = Object.create(someOtherObj)

//! 尽量不要使用 __proto__ 属性 而是使用以下操作
/**
 * Object.setPrototypeOf()  写操作
 * Object.getPrototypeOf()  读操作
 * Object.create()     生成操作
 */

// TODO: Object.keys()
//* 返回一个数组，成员是对象自身（不含继承）所有可遍历属性的键名
var obj4 = { foo: 'bar', baz: 42 }
Object.keys(obj4) // [ 'foo', 'baz' ]

//* 搭配 Object.values Object.entries 遍历对象 供 for...of 使用

let obj5 = { a: 1, b: 2, c: 3 }
for (let [key, value] of Object.entries(obj5)) {
  console.log([key, value])
}

/* 
   [ 'a', 1 ]
   [ 'b', 2 ]
   [ 'c', 3 ] 
*/

// TODO: Object.values()
//* 返回一个数组 成员是参数对象自身的（不含继承的）所有可遍历属性的键值
Object.values('foo') // ['f', 'o', 'o']

// TODO: Object.entries 只输出属性非Symbol值的属性 对应着 Reflect.ownEntries() 返回自身的所有属性
const obj6 = { foo: 'bar', baz: 42 }
console.log(Object.entries(obj6)) // [ [ 'foo', 'bar' ], [ 'baz', 42 ] ]

//* 手撕 Object.entries()

// 版本一：非Generator 函数
function entries(obj) {
  let arr = []
  for (let key of Object.keys(obj)) {
    arr.push([key, obj[key]])
  }
}

// 版本二：Generator 函数
function* entries1(obj) {
  for (let key of Object.keys(obj)) {
    yield [key, obj[key]]
  }
}

// 测试
const testObj = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3',
}

const generator = entries1(testObj)

// 使用 next() 方法逐步执行
let result = generator.next()
while (!result.done) {
  console.log(result.value)
  result = generator.next()
}

/* 
    [ 'prop1', 'value1' ]
    [ 'prop2', 'value2' ]
    [ 'prop3', 'value3' ]
*/

// TODO: Object.fromEntries()
//* 将一个键值对数组转为对象
Object.fromEntries([
  ['foo', 'bar'],
  ['baz', 42],
]) // { foo: "bar", baz: 42 }

// TODO: Object.hasOwn()
//* 指定的对象有指定的属性，返回 true，如果属性是继承的或者不存在，方法返回 false

const object1 = {
  prop: 'exists',
}
console.log(Object.hasOwn(object1, 'prop')) // true

//* 他与实例方法 obj.hasOwnProperty（）区别：

obj.hasOwnProperty('foo') // 报错
Object.hasOwn(obj, 'foo') // false
