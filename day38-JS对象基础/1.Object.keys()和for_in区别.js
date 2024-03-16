// TODO: for in 和 Object.keys() 区别

/**
 * 两者都可以用来遍历对象，获取到对象的【除Symbol】的可枚举属性名，
 *  - for...in：会获取到【原型】上所有的【除Symbol】可枚举属性
 *  - Object.keys() 只能获取到自身的
 */


const obj = {
  a: 1,
  b: 2,
}

Object.defineProperty(obj, 'c', {
  value: 3,
  enumerable: false
})

const symbol = Symbol('d')
obj[symbol] = 4

// 设置为原型上的值
obj.__proto__ = {
  e: 5
}

for(const key in obj) {
  console.log(key)  // a b e
}

const keys = Object.keys(obj)
console.log(keys) // [ 'a', 'b' ]


// TODO: 可以使用in 操作符判断某个属性是否在某个对象上或其原型链上，并且可以判断【Symbol】属性和【非可枚举】属性

console.log(e in obj)
console.log(symbol in obj)